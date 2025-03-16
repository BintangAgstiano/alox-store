import { useEffect, useState } from "react";

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const animate = () => {
            let start = 0;
            const duration = 1000;
            const intervalTime = 30;
            const steps = duration / intervalTime;
            const increment = target / steps;

            const interval = setInterval(() => {
                start += increment;
                setCount(Math.floor(start));
                if (start >= target) {
                    setCount(target);
                    clearInterval(interval);
                }
            }, intervalTime);

            return interval;
        };

        let interval = animate();
        const loop = setInterval(() => {
            setCount(0);
            interval = animate();
        }, 3000);

        return () => {
            clearInterval(interval);
            clearInterval(loop);
        };
    }, [target]);

    return <span className="number">{count}+</span>;
};
const TypingAnimation = () => {
    const text = "Harus memilih ALOX STORE";
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const speed = isDeleting ? 100 : 100; // Kecepatan mengetik dan menghapus
    const delay = 1500; // Jeda sebelum menghapus

    useEffect(() => {
        let timeout;

        if (!isDeleting) {
            if (displayText.length < text.length) {
                timeout = setTimeout(() => {
                    setDisplayText(text.substring(0, displayText.length + 1));
                }, speed);
            } else {
                setTimeout(() => setIsDeleting(true), delay);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(text.substring(0, displayText.length - 1));
                }, speed);
            } else {
                setIsDeleting(false);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, text]);

    return <div className="title-halaman2">{displayText}<span className="cursor">|</span></div>;
};

// export default TypingAnimation;
const Index = () => {
    const [bgHome, setBgHome] = useState("bg-roblox1.jpg");
    const [bgImages, setBgImages] = useState(["bg-roblox2.jpg", "bg-roblox3.jpg"]);

    const handleBgChange = (index) => {
        const newBg = bgImages[index];
        const updatedBgImages = [...bgImages];
        updatedBgImages[index] = bgHome;
        setBgHome(newBg);
        setBgImages(updatedBgImages);
    };
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "6282328036597"; // Ganti dengan nomor tujuan (format internasional tanpa "+")
        const text = `Halo, saya ${name}. Saya ingin bertanya: ${message}`;

        const waLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;
        window.open(waLink, "_blank");
    };
    return (
        <>
            <div className="popup">
                <img src="logo-alox-store.png" width={200} alt="" />
                <div className="line"></div>
            </div>
            <div className="container">
                <header>
                    <nav>
                        <img src="logo-alox-store.png" width={100} alt="" />
                        <div className="link-nav">
                            <a href="#halaman3"><i class='bx bx-cart'></i> Produk</a>
                            <a href="#halaman4"><i class='bx bx-phone' ></i>Kontak</a>
                        </div>
                    </nav>
                </header>
                <div className="content-website">
                    <div className="home" style={{ backgroundImage: `url(${bgHome})` }}>
                        <div className="bg-shadow"></div>
                        <div className="content-home">
                            <div className="title-home">Dapatkan Item Roblox Favoritmu dengan Harga Terbaik</div>
                            <div className="desc-home">Tingkatkan pengalaman bermain Roblox-mu dengan koleksi item eksklusif, mulai dari aksesori, skin, hingga gamepass favorit! Kami menawarkan harga terbaik</div>
                            <div className="col-btn">
                                <a className="link-btnLanjut" style={{ marginLeft: "-10px" }} href="#halaman2"><button className="btn-lanjut">Selanjutnya</button></a>
                                <a className="link-boxArrow" style={{ marginLeft: "0px" }} href="#halaman2"> <div className="box-arrow"><i class='bx bx-right-arrow-alt' ></i></div></a>
                            </div>
                        </div>
                        <div className="col-bg">
                            {bgImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt=""
                                    width={150}
                                    onClick={() => handleBgChange(index)}
                                    style={{ cursor: "pointer" }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="halaman2" id="halaman2">
                        <div className="left-halaman2">
                            <img src="Group.png" width={450} alt="" />
                        </div>
                        <div className="right-halaman2">
                            <div className="col-mengapa">Mengapa</div>
                            <TypingAnimation></TypingAnimation>
                            <div className="desc-title-halaman2">AloxStore hadir untuk memberikan pengalaman terbaik dengan koleksi item eksklusif, desain premium, dan kualitas terbaik.</div>
                            <div className="col-info">
                                <div className="col-pembeli">
                                    <Counter target={270} />
                                    <span className="keterangan">Pembeli</span>
                                </div>
                                <div className="col-item-terjual">
                                    <Counter target={818} />

                                    <div className="keterangan">Item Terjual</div>
                                </div>
                            </div>
                            <div className="col-info2">
                                <div className="col-pembeli">
                                    <Counter target={15} />

                                    <span className="keterangan">Item Tersedia</span>
                                </div>
                                <div className="col-item-terjual">
                                    <Counter target={5} />

                                    <div className="keterangan">Rating Pembeli</div>
                                </div>
                            </div>
                            <div className="col-btn-hal2">
                                <a href="https://wa.me/6281327106819 " target="_blank"><button className="wa"><i class='bx bxl-whatsapp'></i> WhatsApp</button></a>
                                <a href="https://www.instagram.com/alokstore1222?igsh=MTZjeGo4M2tqOW00Zg==" target="_blank"> <button className="ig"><i class='bx bxl-instagram'></i></button></a>

                                <a href="https://www.tiktok.com/@yhjaror?_t=ZS-8uhm08ZjZ2u&_r=1" target="_blank">  <button className="tiktok"><i class='bx bxl-tiktok'></i></button></a>
                            </div>
                        </div>
                    </div>
                    <div className="halaman3" id="halaman3">
                        <div className="title-halaman3">Item Saya</div>
                        <div className="desc-halaman3">AloxStore menghadirkan koleksi item eksklusif dengan desain premium</div>
                        <div className="column-card">
                            <div className="card">
                                <img src="item2.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Nessie - Sparking Shiny | Limited fish</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 2.500</div>
                                    <div className="text-terjual">40+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-nessie-sparking-shiny-limited-fish-alokstore1222/3271919" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>
                            </div>
                            <div className="card">
                                <img src="item4.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Phantom Megalodon - Sparking Shiny | Limited fish</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 2.500</div>
                                    <div className="text-terjual">164+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-phantom-megalodon-sparking-shiny-limited-fish-alokstore1222/3272046" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item6.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">100K Money</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 1.000</div>
                                    <div className="text-terjual">7+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-100k-money-alokstore1222/3276816" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item2.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Nessie - Sparking Shiny | Limited fish</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 2.500</div>
                                    <div className="text-terjual">25+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-nessie-sparkling-shiny-limited-fish-alokstore1222/3276825" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item4.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">
                                    Phantom Megalodon - Sparkling Shiny | Limited fish</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 2.500</div>
                                    <div className="text-terjual">51+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-phantom-megalodon-sparkling-shiny-limited-fish-alokstore1222/3276835" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item5.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Rod Of The Exalted One | Bundle Relic</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 3.500</div>
                                    <div className="text-terjual">447+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-rod-of-the-exalted-one-bundle-relic-alokstore1222/3276900" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>

                            <div className="card">
                                <img src="item12.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Mythical Phantom Megalodon - Sparkling Shiny | Limited fish</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 4.000</div>
                                    <div className="text-terjual">2+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-mythical-phantom-megalodon-sparkling-shiny-limited-fish-alokstore1222/3291528" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item8.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Scylla - Sparkling Shiny | Secret fish</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 2.000</div>
                                    <div className="text-terjual">3+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-scylla-sparkling-shiny-secret-fish-alokstore1222/3327988" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item10.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Ancient Orca - Sparkling Shiny | Limited fish</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 4.000</div>
                                    <div className="text-terjual">54+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-ancient-orca-sparkling-shiny-limited-fish-alokstore1222/3335129" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item1.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Ancient Kraken - Sparkling Shiny | Secret fish
</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 4.000</div>
                                    <div className="text-terjual">7+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-ancient-kraken-sparkling-shiny-secret-fish-alokstore1222/3339526" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item3.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">
                                    Lovestorm Eel Supercharged - Sparkling | Secret fish</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 6.000</div>
                                    <div className="text-terjual">4+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-lovestorm-eel-supercharged-sparkling-secret-fish-alokstore1222/3339675" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item11.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Hexed + Abyysal Enchant Relic | Bundle Relic</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 2.000</div>
                                    <div className="text-terjual">12+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-hexed-abyysal-enchant-relic-bundle-relic-alokstore1222/3277892" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item13.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Lovestrom Eel - Random Mutation | Limited fish</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 2.000</div>
                                    <div className="text-terjual">7+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-lovestrom-eel-random-mutation-limited-fish-alokstore1222/3296739" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item7.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Frozen Leviathan - Random Mutation | Limited</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 2.500</div>
                                    <div className="text-terjual">0 Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-frozen-leviathan-random-mutation-limited-alokstore1222/3323592" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item14.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">Scylla - Sparkling Shiny Big | Secret fish</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 4.500</div>
                                    <div className="text-terjual">2+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-scylla-sparkling-shiny-big-secret-fish-alokstore1222/3327982" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                            <div className="card">
                                <img src="item9.jpg" className="cover" width={250} alt="" />
                                <div className="title-card">
                                    Magma Leviathan - Random Mutation | Limited</div>
                                <div className="col-harga">
                                    <div className="number-harga">Rp 3.000</div>
                                    <div className="text-terjual">1+ Terjual</div>
                                </div>
                                <a href="https://itemku.com/dagangan/fisch-roblox-magma-leviathan-random-mutation-limited-alokstore1222/3327990" target="_blank"> <button className="btn-kunjungi-item">Kunjungi Item</button></a>

                            </div>
                        </div>
                    </div>
                    <div className="halaman4" id="halaman4">
                        <div className="title-halaman4">Kontak Saya</div>
                        <div className="desc-halaman4">Hubungi saya untuk mendapatkan koleksi item eksklusif dengan desain premium yang akan membuat avatar Anda lebih unik</div>
                        <div className="column-content-hal4">
                            <form className="left-halaman4" onSubmit={handleSubmit}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    placeholder="Input name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />

                                <label htmlFor="message">Konsultasi / Pertanyaan</label>
                                <input
                                    type="text"
                                    placeholder="Input Pertanyaan"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />

                                <button className="btn-form" type="submit">Kirim Pesan</button>
                            </form>
                            <div className="right-halaman4">
                                <img src="img-login.png" width={300} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="content-footer">
                    © 2024 AloxStore. All Rights Reserved.
                </div>
            </div>
        </>
    )
}
export default Index