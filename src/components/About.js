import isai from "../assets/isai_transparent.png"

export default function About() {
  return (
    <section className="sticky self-start hidden top-20 md:block" style={{ maxWidth: "180px", marginTop: "75px" }}>
      <div className="mb-8 overflow-hidden rounded-sm" style={{ background: "linear-gradient(-72deg, #0037ff, #0088ff)" }}>
        <img src={isai} width="180px" height="180px" alt="headshot of Isai Carreto" />
      </div>
      <p className="mb-1 text-sm tracking-wide text-gray-500 uppercase">About</p>
      <h2 className="mb-1 font-bold">Isai Carreto</h2>
      <p className="text-sm text-gray-500">Front-end Developer who loves climbing and creating enticing experiences</p>
    </section>
  )
}
