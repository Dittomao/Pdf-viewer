// Get references to the DOM elements
const urlInput = document.getElementById('pdf-url');
const canvas = document.getElementById('pdf-viewer');
const ctx = canvas.getContext('2d');

async function loadPDF() {
    // Clear previous canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Get PDF URL from the input field
                const url = urlInput.value;

                    if (!url) {
                            alert('Please enter a PDF URL.');
                                    return;
                                        }

                                            try {
                                                    // Load the PDF document
                                                            const loadingTask = pdfjsLib.getDocument(url);
                                                                    const pdf = await loadingTask.promise;

                                                                            // Fetch the first page
                                                                                    const pageNumber = 1;
                                                                                            const page = await pdf.getPage(pageNumber);

                                                                                                    // Prepare canvas using PDF page dimensions
                                                                                                            const viewport = page.getViewport({ scale: 1 });
                                                                                                                    canvas.width = viewport.width;
                                                                                                                            canvas.height = viewport.height;

                                                                                                                                    // Render PDF page into the canvas context
                                                                                                                                            const renderContext = {
                                                                                                                                                        canvasContext: ctx,
                                                                                                                                                                    viewport: viewport
                                                                                                                                                                            };
                                                                                                                                                                                    await page.render(renderContext).promise;

                                                                                                                                                                                        } catch (error) {
                                                                                                                                                                                                console.error('Error loading PDF:', error);
                                                                                                                                                                                                        alert('Failed to load PDF. Check the console for details.');
                                                                                                                                                                                                            }
                                                                                                                                                                                                            }
                                                                                                                                                                                                            