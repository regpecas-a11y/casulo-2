
/**
 * imageService.ts - Especialista em Blindagem e Economia de Dados
 * Reduz custos de Storage convertendo imagens para WebP 75% e 1080px.
 */

export const processImageForUpload = async (base64Str: string, maxWidth: number = 1080): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = maxWidth;
      let width = img.width;
      let height = img.height;

      // Mantém proporção
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return reject('Erro no contexto do canvas');
      
      ctx.drawImage(img, 0, 0, width, height);
      
      // Conversão para WebP com 75% de qualidade (Equilíbrio perfeito entre peso e estética)
      const optimizedBase64 = canvas.toDataURL('image/webp', 0.75);
      resolve(optimizedBase64);
    };
    img.onerror = (err) => {
      console.error("Image optimization error:", err);
      reject(err);
    };
    img.src = base64Str;
  });
};
