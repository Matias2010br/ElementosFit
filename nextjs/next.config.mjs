/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // As fotos são servidas de /public como <img> comum, para que a troca de
  // arquivos na pasta assets/img continue sendo tão simples quanto no site
  // estático. Se quiser usar next/image depois, é só trocar em PhotoSlot.
  images: { unoptimized: true },
};

export default nextConfig;
