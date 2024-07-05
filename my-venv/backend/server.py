from flask import Flask, request, send_file
from flask_cors import CORS
import cv2
import numpy as np
import io
from PIL import Image
import json

app = Flask(__name__)
CORS(app)

def detect_spots(image, lower_color, upper_color):
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    mask = cv2.inRange(hsv, lower_color, upper_color)
    result = cv2.bitwise_and(image, image, mask=mask)
    return result

@app.route('/detect-spots', methods=['POST'])
def detect_spots_endpoint():
    image_file = request.files['image']
    lower_color = np.array(json.loads(request.form['lower_color']))
    upper_color = np.array(json.loads(request.form['upper_color']))

    image = Image.open(image_file.stream)
    image = np.array(image)

    result = detect_spots(image, lower_color, upper_color)
    result_image = Image.fromarray(result)

    img_io = io.BytesIO()
    result_image.save(img_io, 'JPEG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/jpeg')

if __name__ == '__main__':
    app.run(port=5000)
