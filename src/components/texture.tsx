function Texture() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#B1A5FF_0%,_#8270F7_77%,_#523ED2_100%)] opacity-20"></div>
      <div className="absolute inset-0 bg-[url('/texture.svg')] bg-cover opacity-8 mix-blend-overlay"></div>
    </>
  );
}

export default Texture;
