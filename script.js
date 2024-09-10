// URL of the PDF to display
const url = 'https://example.com/your-pdf-file.pdf'; // Replace with the URL of your PDF file

// The PDF.js library requires a specific worker script
const pdfjsLib = window['pdfjs-dist/build/pdf'];

// Asynchronous download of PDF
pdfjsLib.getDocument(url).promise.then(pdf => {
    // Fetch the first page
        pdf.getPage(1).then(page => {
                const scale = 1.5;
                        const viewport = page.getViewport({ scale: scale });

                                // Prepare canvas using PDF page dimensions
                                        const canvas = document.createElement('canvas');
                                                const context = canvas.getContext('2d');
                                                        canvas.height = viewport.height;
                                                                canvas.width = viewport.width;

                                                                        document.getElementById('pdf-viewer').appendChild(canvas);

                                                                                // Render PDF page into canvas context
                                                                                        const renderContext = {
                                                                                                    canvasContext: context,
                                                                                                                viewport: viewport
                                                                                                                        };
                                                                                                                                page.render(renderContext);
                                                                                                                                    });
                                                                                                                                    }).catch(error => {
                                                                                                                                        console.error('Error loading PDF:', error);
                                                                                                                                        });
                                                                                                                                        