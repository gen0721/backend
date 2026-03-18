const fs = require('fs');
const path = require('path');

// Создаем простые SVG иконки разных размеров
const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#0d0d14"/>
  <text x="256" y="320" font-family="Arial, sans-serif" font-size="240" font-weight="bold" text-anchor="middle" fill="#ffffff">M</text>
  <text x="256" y="380" font-family="Arial, sans-serif" font-size="60" text-anchor="middle" fill="#888">Market</text>
</svg>
`;

const sizes = [16, 32, 70, 72, 96, 128, 144, 150, 152, 192, 310, 384, 512];

// Создаем HTML файл для генерации иконок
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Generate Icons</title>
</head>
<body>
    <canvas id="canvas" style="display:none;"></canvas>
    <script>
        const svg = \`${svgIcon.replace(/`/g, '\\`')}\`;
        const sizes = [16, 32, 70, 72, 96, 128, 144, 150, 152, 192, 310, 384, 512];
        
        function createIcon(size) {
            const canvas = document.getElementById('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            
            const img = new Image();
            const svgBlob = new Blob([svg], {type: 'image/svg+xml;charset=utf-8'});
            const url = URL.createObjectURL(svgBlob);
            
            img.onload = function() {
                ctx.drawImage(img, 0, 0, size, size);
                canvas.toBlob(function(blob) {
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = 'icon-' + size + 'x' + size + '.png';
                    a.click();
                });
            };
            img.src = url;
        }
        
        // Генерируем все иконки
        sizes.forEach((size, index) => {
            setTimeout(() => createIcon(size), index * 200);
        });
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'generate-icons.html'), htmlContent);
console.log('Откройте generate-icons.html в браузере для скачивания иконок');
