# YOLO-based Leaf Deposit Detection

## 📌 Descrição do Projeto
Este projeto utiliza o modelo YOLO para detectar depósitos em folhas de milho. O objetivo é avaliar a distribuição de um determinado produto aplicado nas folhas, garantindo uma cobertura eficaz. A abordagem envolve anotação de imagens, treinamento de um modelo YOLO customizado e avaliação de desempenho.

## 🚀 Tecnologias Utilizadas
- **YOLOv11-seg**: Modelo de detecção e segmentação
- **Python**: Linguagem principal do projeto
- **OpenCV**: Processamento de imagens
- **CVAT**: Ferramenta para anotação de imagens
- **Ultralytics YOLO**: Framework utilizado para treinar e validar o modelo
- **Matplotlib & Seaborn**: Visualização de resultados

## 📊 Estrutura do Projeto
```
├── dataset/
│   ├── images/  # Imagens anotadas
│   ├── labels/  # Arquivos de anotação
├── models/
│   ├── best.pt  # Modelo treinado
├── scripts/
│   ├── train.py  # Script de treinamento
│   ├── evaluate.py  # Avaliação do modelo
├── results/
│   ├── metrics.png  # Métricas de treino e validação
├── README.md  # Documentação do projeto
```

## 📂 Como Usar
### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/Oswald0Jr/detector-manchas-milho.git
cd detector-manchas-milho
```

### 2️⃣ Instalar Dependências
```bash
pip install -r requirements.txt
```

### 3️⃣ Treinar o Modelo
```bash
python scripts/train.py --epochs 350 --data dataset/config.yaml --weights yolov11s-seg.pt
```

### 4️⃣ Testar o Modelo
```bash
python scripts/evaluate.py --weights models/best.pt --source dataset/test
```

## 📈 Resultados
Os resultados do treinamento e validação são apresentados em gráficos, incluindo:
- **Loss Functions**: Analisam a convergência do modelo
- **mAP50-95**: Avaliação de precisão do modelo
- **Precision & Recall**: Medidas de desempenho

## 📜 Licença
Este projeto está licenciado sob a **MIT License**. Sinta-se à vontade para contribuir e utilizar.

## 🤝 Contribuição
Contribuições são bem-vindas! Para colaborar:
1. Faça um fork do repositório
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça um push (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request 🚀

---
Desenvolvido por **[Oswaldo Júnior]** 🎯

