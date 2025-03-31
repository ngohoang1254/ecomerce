import Hero from "@/components/Hero";
import ProductList from "../[slug]/component/ProductList";

export default function InstallmentHd() {
    return (
        <div>
            <Hero />
            <div className="container mx-auto grid md:grid-cols-4 grid-cols-1 gap-8 my-8 px-4">
                <div className="col-span-3">
                    <div className="content-page rte">
                        <h2 style={{ textAlign: "center" }}>
                            <span style={{ fontSize: 22 }}>
                                <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                                    <span style={{ color: "#3498db" }}>
                                        <strong>HỆ THỐNG SHOWOOM PIAGGIO SAPA</strong>
                                    </span>
                                </span>
                            </span>
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                TRƯỜNG TỒN - ĐỔI MỚI, với hơn ba thập kỷ đóng vai trò đại lý ủy quyền phân
                                phối chính hãng các dòng xe Vespa và Piaggio từ những ngày đầu tiên hơn 30
                                năm trước. Chúng tôi - Piaggio Sapa đã, đang và sẽ luôn là người đồng hành
                                uy tín của những tâm hồn đam mê sự hoài cổ, pha lẫn chút tinh tế huyền bí
                                và đầy sang trọng trong đường nét thiết kế của Vespa. Phương châm Chuyên
                                nghiệp - Nhanh chóng - Tận tâm đã dần trở thành 3 chìa khóa chính trong
                                phong cách phục vụ qua đó cam kết luôn đặt trải nghiệm mua sắm và sử dụng
                                các dịch vụ khác của chính các bạn lên hàng đầu. Bởi vì chúng tôi là:
                                Piaggio Sapa - Trao Trọn Vẹn Một Giá Trị Thương Hiệu Hơn Ba Thập Kỷ.
                            </span>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/piaggiosapa.jpg?v=1719204470746"
                                    style={{ width: "100%" }}
                                />
                            </span>
                        </p>
                        <h2>
                            <strong>
                                <span style={{ fontSize: 16 }}>
                                    Trung tâm Vespa Sapa Kinh Dương Vương{" "}
                                </span>
                            </strong>
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                Đây là trung tâm Vespa và Piaggio trực thuộc Vespa Sapa, phân phối chính
                                hãng các dòng xe tay ga Vespa và Piaggio. Tiếp nhận bảo hành và bảo dưỡng
                                chính hãng, cung cấp dịch vụ sơn xe Vespa, Custom color Vespa, cứu hộ tại
                                nhà và phân phối phụ tùng phụ kiện chính hãng khu vực phía tây Tp.HCM.
                                <br />
                                <strong>
                                    <em>
                                        Bản đồ hướng dẫn đường đi đến trung tâm Vespa Kinh Dương Vương, Quận
                                        6.
                                    </em>
                                </strong>
                            </span>
                        </p>
                        <div
                            style={{
                                maxWidth: "100%",
                                listStyle: "none",
                                transition: "none",
                                overflow: "hidden",
                                width: "100%",
                                height: 250
                            }}
                        >
                            <div
                                id="embeddedmap-canvas"
                                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                            >
                                <iframe
                                    frameBorder={0}
                                    src="https://www.google.com/maps/embed/v1/place?q=Vespa+Sapa+Kinh+Dương+Vương&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                    style={{ height: "100%", width: "100%", border: 0 }}
                                />
                            </div>
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "#embeddedmap-canvas img{max-height:none;max-width:none!important;background:none!important;}\n"
                                }}
                            />
                        </div>
                        <p>
                            <em>
                                <strong>
                                    <span style={{ fontSize: 14 }}>
                                        Không gian Showroom Vespa Sapa Kinh Dương Vương, Quận 6
                                    </span>
                                </strong>
                            </em>
                        </p>
                        <h2>
                            <img
                                data-thumb="original"
                                src="//bizweb.dktcdn.net/100/394/903/files/dai-ly-vespa-sapa-kinh-duong-vuong.jpg?v=1702637654145"
                                style={{ width: "100%" }}
                            />
                        </h2>
                        <p>
                            <span style={{ fontSize: 14 }}>
                                📍 Địa chỉ:&nbsp;131 Kinh Dương Vương, Phường 12, Quận 6, TP Hồ Chí Minh.
                                <br />
                                ☎️&nbsp;Tổng đài trung tâm:{" "}
                                <strong>
                                    <a href="tel:1900252633">1900252633 </a>
                                </strong>
                                - Chọn <strong>PHÍM&nbsp;4</strong>, chọn tiếp&nbsp;
                                <strong>PHÍM 7&nbsp;gặp Trung tâm Vespa Sapa Kinh Dương Vương.</strong>
                                <br />☎ Bán hàng:{" "}
                                <u>
                                    <strong>
                                        <a href="tel:02838778855">028.38778855</a>
                                    </strong>
                                </u>{" "}
                                - (8h00 - 18h00 từ Thứ Hai đến chủ Nhật).&nbsp;
                                <br />☎ Dịch vụ Bảo dưỡng, Sữa chữa, Bảo hành, Cứu hộ:{" "}
                                <strong>
                                    <a href="tel:02838778859">028.38778859</a>
                                </strong>{" "}
                                (8h00 - 18h00 từ Thứ Hai đến chủ Nhật).
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>--------------------------</span>
                        </p>
                        <h2>
                            <strong>
                                <span style={{ fontSize: 16 }}>
                                    Trung tâm Vespa Sapa Quốc Hương, Quận 2.
                                </span>
                            </strong>
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                Đây là trung tâm Vespa và Piaggio nằm ở phía đông Sài Gòn trực thuộc Vespa
                                Sapa, nơi phân phối chính hãng&nbsp;Vespa và Piaggio. Đồng thời này nơi
                                tiếp nhận bảo hành và bảo dưỡng, sửa chữa xe Vespa&nbsp;chính hãng, cung
                                cấp dịch vụ sơn xe Vespa, Custom color Vespa, cứu hộ tại nhà và phân phối
                                phụ tùng phụ kiện chính hãng khu vực phía đông Tp.HCM.&nbsp;
                            </span>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <strong>
                                <span style={{ fontSize: 14 }}>
                                    <em>
                                        Bản đồ hướng dẫn đường đi đến trung tâm Vespa Quốc Hương, Quận 2
                                    </em>
                                </span>
                            </strong>
                        </p>
                        <div
                            style={{
                                maxWidth: "100%",
                                listStyle: "none",
                                transition: "none",
                                overflow: "hidden",
                                width: "100%",
                                height: 250
                            }}
                        >
                            <div
                                id="embeddedmap-canvas"
                                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                            >
                                <iframe
                                    allowFullScreen={true}
                                    height={450}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.4184693159!2d106.36557932399292!3d10.755292848364642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527b131aac28d%3A0x9b5fbc0781b77d55!2zQ8O0bmcgdHkgVE5ISCDDlCBUw7QgVsOgIFhlIE3DoXkgU2FwYQ!5e0!3m2!1svi!2s!4v1693366931527!5m2!1svi!2s"
                                    style={{ height: "100%", width: "100%", border: 0 }}
                                />
                            </div>
                            <a
                                className="googlemaps-code"
                                href="https://www.embed-map.com"
                                id="enablemap-data"
                            >
                                https://www.embed-map.com
                            </a>
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "#embeddedmap-canvas img{max-height:none;max-width:none!important;background:none!important;}\n"
                                }}
                            />
                        </div>
                        <p>
                            <strong>
                                <em>
                                    <span style={{ fontSize: 14 }}>
                                        Không gian Showroom Vespa Quốc Hương, Quận 2.
                                    </span>
                                </em>
                            </strong>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/dai-ly-vespa-sapa-quoc-huong.jpg?v=1702638112773"
                                    style={{ width: "100%" }}
                                />
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>
                                📍 Địa chỉ:&nbsp;03 Quốc Hương,&nbsp; Phường Thảo Điền, Quận 2, TP Hồ Chí
                                Minh.
                                <br />
                                ☎️&nbsp;Tổng đài trung tâm:{" "}
                                <strong>
                                    <a href="tel:1900252633">1900252633 </a>
                                </strong>
                                - Chọn <strong>PHÍM&nbsp;4</strong>, chọn tiếp&nbsp;
                                <strong>PHÍM 6 gặp Trung tâm Vespa Sapa Quốc Hương.</strong>
                                <br />☎ Bán hàng:{" "}
                                <u>
                                    <strong>
                                        <a href="tel:02836362683">028.36362683</a>
                                    </strong>
                                </u>{" "}
                                -&nbsp;(8h00 - 18h00 từ Thứ Hai đến chủ Nhật).
                                <br />☎ Dịch vụ Bảo dưỡng, Sữa chữa, Bảo hành, Cứu hộ:{" "}
                                <strong>
                                    <a href="tel:02836362653">028.36362653</a>
                                </strong>{" "}
                                (8h00 - 18h00 từ Thứ Hai đến chủ Nhật).
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>--------------------------</span>
                        </p>
                        <h2>
                            <strong>
                                <span style={{ fontSize: 16 }}>
                                    Trung tâm Vespa Sapa Cộng Hòa -&nbsp; Motoplex Sài Gòn
                                </span>
                            </strong>
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                Đây là trung tâm Motoplex Sài Gòn, cửa hàng lớn nhất tại Việt Nam
                                của&nbsp;trực thuộc Vespa Sapa, nơi phân phối chính hãng&nbsp;Vespa -
                                Piaggio - Aprilia - Moto Guzzi. Đồng thời này nơi tiếp nhận bảo hành và
                                bảo dưỡng, sửa chữa xe Vespa, Piaggio, Aprilia, Moto Guzzi&nbsp;chính
                                hãng, cung cấp dịch vụ sơn xe Vespa, Custom color Vespa, cứu hộ tại nhà và
                                phân phối phụ tùng phụ kiện chính hãng khu vực trung tâm Tp.HCM.
                            </span>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <strong>
                                <span style={{ fontSize: 14 }}>
                                    <em>
                                        Bản đồ hướng dẫn đường đi đến trung tâm Vespa Cộng Hòa, Quận Tân Bình
                                    </em>
                                </span>
                            </strong>
                        </p>
                        <div
                            style={{
                                maxWidth: "100%",
                                listStyle: "none",
                                transition: "none",
                                overflow: "hidden",
                                width: "100%",
                                height: 250
                            }}
                        >
                            <div
                                id="embeddedmap-canvas"
                                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                            >
                                <iframe
                                    frameBorder={0}
                                    src="https://www.google.com/maps/embed/v1/place?q=Vespa+Sapa+Cộng+Hòa&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                    style={{ height: "100%", width: "100%", border: 0 }}
                                />
                            </div>
                            <a
                                className="googlemaps-code"
                                href="https://www.embed-map.com"
                                id="enablemap-data"
                            >
                                https://www.embed-map.com
                            </a>
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "#embeddedmap-canvas img{max-height:none;max-width:none!important;background:none!important;}\n"
                                }}
                            />
                        </div>
                        <p>
                            <strong>
                                <em>
                                    <span style={{ fontSize: 14 }}>
                                        Không gian bên ngoài Showroom - Trung tâm Motoplex Sài Gòn.
                                    </span>
                                </em>
                            </strong>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/dai-ly-vespa-sapa-cong-hoa.jpg?v=1702638367176"
                                    style={{ width: "100%" }}
                                />
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>
                                📍 Địa chỉ:&nbsp;223-233 Cộng Hòa, Phường 13, QuậnTân Bình, TP Hồ Chí
                                Minh.
                                <br />
                                ☎️&nbsp;Tổng đài trung tâm:{" "}
                                <strong>
                                    <a href="tel:1900252633">1900252633 </a>
                                </strong>
                                - Chọn <strong>PHÍM&nbsp;4</strong>, chọn tiếp&nbsp;
                                <strong>PHÍM 1&nbsp;gặp Trung tâm Vespa Sapa Cộng Hòa.</strong>
                                <br />☎ Bán hàng:&nbsp;
                                <u>
                                    <strong>
                                        <a href="tel:02838116414">028.38116414</a>
                                    </strong>
                                </u>{" "}
                                -&nbsp;(8h00 - 20h00 từ Thứ Hai đến chủ Nhật).
                                <br />☎ Dịch vụ Bảo dưỡng, Sữa chữa, Bảo hành, Cứu hộ:{" "}
                                <strong>
                                    <a href="tel:02838116414">028.38116414</a>
                                </strong>{" "}
                                - <strong>Line 101</strong> (8h00 - 18h00 từ Thứ Hai đến chủ Nhật).
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>--------------------------</span>
                        </p>
                        <h2>
                            <strong>
                                <span style={{ fontSize: 16 }}>Trung Tâm Vespa Sapa 3 Tháng 2</span>
                            </strong>
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                Đây là trung tâm Vespa đầu tiên tại&nbsp;Sài Gòn, cửa hàng đã có hơn 30
                                năm và là đầu tiên&nbsp;tại Việt Nam của&nbsp;trực thuộc Vespa Sapa, nơi
                                phân phối chính hãng&nbsp;Vespa - Piaggio. Đồng thời này nơi tiếp nhận bảo
                                hành và bảo dưỡng, sửa chữa xe Vespa, Piaggio chính hãng, cung cấp dịch vụ
                                sơn xe Vespa, Custom color Vespa, cứu hộ tại nhà và phân phối phụ tùng phụ
                                kiện chính hãng khu vực trung tâm Tp.HCM.
                            </span>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <strong>
                                <span style={{ fontSize: 14 }}>
                                    <em>
                                        Bản đồ hướng dẫn đường đi đến trung tâm Vespa 3 Tháng 2, Quận 10.
                                    </em>
                                </span>
                            </strong>
                        </p>
                        <div
                            style={{
                                maxWidth: "100%",
                                listStyle: "none",
                                transition: "none",
                                overflow: "hidden",
                                width: "100%",
                                height: 250
                            }}
                        >
                            <div
                                id="embeddedmap-canvas"
                                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                            >
                                <iframe
                                    frameBorder={0}
                                    src="https://www.google.com/maps/embed/v1/place?q=SAPA+3/2&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                    style={{ height: "100%", width: "100%", border: 0 }}
                                />
                            </div>
                            <a
                                className="googlemaps-code"
                                href="https://www.embed-map.com"
                                id="enablemap-data"
                            >
                                https://www.embed-map.com
                            </a>
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "#embeddedmap-canvas img{max-height:none;max-width:none!important;background:none!important;}\n"
                                }}
                            />
                        </div>
                        <p>
                            <em>
                                <strong>
                                    <span style={{ fontSize: 14 }}>
                                        Không gian bên ngoài Showroom Vespa 3 Tháng 2, Quận 10.
                                    </span>
                                </strong>
                            </em>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/dai-ly-vespa-sapa-3-thang-2.jpg?v=1702638660430"
                                    style={{ width: "100%" }}
                                />
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>
                                📍 Địa chỉ:&nbsp;531 Ba tháng 2, Phường 08, Quận 10, TP Hồ Chí Minh.
                                <br />
                                ☎️&nbsp;Tổng đài trung tâm:{" "}
                                <strong>
                                    <a href="tel:1900252633">1900252633 </a>
                                </strong>
                                - Chọn <strong>PHÍM&nbsp;4</strong>, chọn tiếp&nbsp;
                                <strong>PHÍM 4 gặp Trung tâm Vespa Sapa Ba Tháng Hai.</strong>
                                <br />☎ Bán hàng:{" "}
                                <strong>
                                    <u>
                                        <a href="tel:02838550095">028.38550095</a>
                                    </u>
                                </strong>{" "}
                                -&nbsp;(8h00 - 20h00 từ Thứ Hai đến chủ Nhật).
                                <br />☎ Dịch vụ Bảo dưỡng, Sữa chữa, Bảo hành, Cứu hộ:{" "}
                                <strong>
                                    <a href="tel:02838564673">028.38564673</a>
                                </strong>
                                &nbsp;- (8h00 - 18h00 từ Thứ Hai đến chủ Nhật).
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>--------------------------</span>
                        </p>
                        <h2>
                            <strong>
                                <span style={{ fontSize: 16 }}>Trung tâm Vespa Sapa Nguyễn Thị Thập</span>
                            </strong>
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                Là trung tâm Vespa và Piaggio lớn nhất khu vực phí nam Sài Gòn, trực thuộc
                                Vespa Sapa, nơi phân phối chính hãng các dòng xe tay ga Vespa và Piaggio.
                                Tiếp nhận bảo hành và bảo dưỡng chính hãng, cung cấp dịch vụ sơn xe Vespa,
                                Custom color Vespa, cứu hộ tại nhà và phân phối phụ tùng phụ kiện chính
                                hãng khu vực phía nam Tp.HCM.
                            </span>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <strong>
                                <span style={{ fontSize: 14 }}>
                                    <em>
                                        Bản đồ hướng dẫn đường đi đến trung tâm Vespa Nguyễn Thị Thập, Quận 7.
                                    </em>
                                </span>
                            </strong>
                        </p>
                        <div
                            style={{
                                maxWidth: "100%",
                                listStyle: "none",
                                transition: "none",
                                overflow: "hidden",
                                width: "100%",
                                height: 250
                            }}
                        >
                            <div
                                id="embeddedmap-canvas"
                                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                            >
                                <iframe
                                    frameBorder={0}
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.775924461122!2d106.7112974!3d10.738801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9b4e0886b1%3A0xd682fced017024eb!2zVmVzcGEgU2FwYSBOZ3V54buFbiBUaOG7iyBUaOG6rXA!5e0!3m2!1svi!2s!4v1696318501392!5m2!1svi!2s"
                                    style={{ height: "100%", width: "100%", border: 0 }}
                                />
                            </div>
                            <a
                                className="googlemaps-code"
                                href="https://www.embed-map.com"
                                id="enablemap-data"
                            >
                                https://www.embed-map.com
                            </a>
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "#embeddedmap-canvas img{max-height:none;max-width:none!important;background:none!important;}\n"
                                }}
                            />
                        </div>
                        <h2>
                            <em>
                                <strong>
                                    <span style={{ fontSize: 14 }}>
                                        Không gian Showroom Vespa Nguyễn Thị Thập, Quận 7.
                                    </span>
                                </strong>
                            </em>
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/dai-ly-vespa-sapa-nguyen-thi-thap.jpg?v=1702638963119"
                                    style={{ width: "100%" }}
                                />
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>
                                📍 Địa chỉ: 374 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP Hồ Chí Minh.
                                <br />
                                ☎️&nbsp;Tổng đài trung tâm:{" "}
                                <strong>
                                    <a href="tel:1900252633">1900252633 </a>
                                </strong>
                                - Chọn <strong>PHÍM&nbsp;4</strong>, chọn tiếp&nbsp;
                                <strong>PHÍM 3 gặp Trung tâm Vespa Sapa Nguyễn Thị Thập.</strong>
                                <br />☎ Bán hàng:&nbsp;
                                <u>
                                    <strong>
                                        <a href="tel:02862989905">028.62989905</a>
                                    </strong>
                                </u>{" "}
                                - (8h00 - 20h00 từ Thứ Hai đến chủ Nhật).
                                <br />☎ Dịch vụ Bảo dưỡng, Sữa chữa, Bảo hành, Cứu hộ:{" "}
                                <strong>
                                    <a href="tel:02862989915">028.62989915</a>
                                </strong>
                                &nbsp;- (8h00 - 18h00 từ Thứ Hai đến chủ Nhật).
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>--------------------------</span>
                        </p>
                        <h2>
                            <strong>
                                <span style={{ fontSize: 16 }}>Trung Tâm Vespa Sapa Điện Biên Phủ</span>
                            </strong>
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                Trung tâm Vespa và Piaggio nằm ở vị trí gàn giao lộ hàng xanh, trực thuộc
                                Vespa Sapa, nơi phân phối chính hãng các dòng xe tay ga Vespa và Piaggio.
                                Tiếp nhận bảo hành và bảo dưỡng chính hãng, cung cấp dịch vụ sơn xe Vespa,
                                Custom color Vespa, cứu hộ tại nhà và phân phối phụ tùng phụ kiện chính
                                hãng tại&nbsp;Tp.HCM.
                            </span>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <strong>
                                <span style={{ fontSize: 14 }}>
                                    <em>
                                        Bản đồ hướng dẫn đường đi đến trung tâm Vespa Điện Biên Phủ, Quận Bình
                                        Thạnh.
                                    </em>
                                </span>
                            </strong>
                        </p>
                        <div
                            style={{
                                maxWidth: "100%",
                                listStyle: "none",
                                transition: "none",
                                overflow: "hidden",
                                width: "100%",
                                height: 250
                            }}
                        >
                            <div
                                id="embeddedmap-canvas"
                                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                            >
                                <iframe
                                    frameBorder={0}
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.553595690915!2d106.7075189!3d10.8007104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c96f23ba2b%3A0x1f8bcdb150f202b5!2zVmVzcGEgU2FwYSDEkGnhu4duIEJpw6puIFBo4bun!5e0!3m2!1svi!2s!4v1696319226668!5m2!1svi!2s"
                                    style={{ height: "100%", width: "100%", border: 0 }}
                                />
                            </div>
                            <a
                                className="googlemaps-code"
                                href="https://www.embed-map.com"
                                id="enablemap-data"
                            >
                                https://www.embed-map.com
                            </a>
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "#embeddedmap-canvas img{max-height:none;max-width:none!important;background:none!important;}\n"
                                }}
                            />
                        </div>
                        <h2>
                            <em>
                                <strong>
                                    <span style={{ fontSize: 14 }}>
                                        Không gian Showroom Vespa Sapa Điện Biên Phủ, Quận Bình Thạnh.
                                    </span>
                                </strong>
                            </em>
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/dai-ly-vespa-dien-bien-phu.jpg?v=1702639100401"
                                    style={{ width: "100%" }}
                                />
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>
                                📍<strong>&nbsp;</strong>📍 Địa chỉ:&nbsp;239-245 Điện Biên Phủ, Phường
                                15, Quận Bình Thạnh, TP Hồ Chí Minh.
                                <br />
                                ☎️&nbsp;Tổng đài trung tâm:{" "}
                                <strong>
                                    <a href="tel:1900252633">1900252633 </a>
                                </strong>
                                - Chọn <strong>PHÍM&nbsp;4</strong>, chọn tiếp&nbsp;
                                <strong>PHÍM 5 gặp Trung tâm Vespa Sapa Điện Biên Phủ.</strong>
                                <br />☎ Bán hàng:&nbsp;
                                <u>
                                    <strong>
                                        <a href="tel:02838447620">028.38447620</a>
                                    </strong>
                                </u>{" "}
                                -&nbsp;(8h00 - 18h00 từ Thứ Hai đến chủ Nhật).
                                <br />☎ Dịch vụ Bảo dưỡng, Sữa chữa, Bảo hành, Cứu hộ:{" "}
                                <strong>
                                    <a href="tel:02835128289">028.35128289</a>
                                </strong>{" "}
                                (8h00 - 18h00 từ Thứ Hai đến chủ Nhật).
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>--------------------------</span>
                        </p>
                        <h2>
                            <strong>
                                <span style={{ fontSize: 16 }}>
                                    Trung Tâm Vespa Sapa Nguyễn Oanh - Gò Vấp
                                </span>
                            </strong>
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontSize: 14 }}>
                                Đây là trung tâm Vespa và Piaggio tọa lạc khu phía bắc Sài Gòn, trung tâm
                                mới 100% theo chuẩn Motoplex,&nbsp;trực thuộc Vespa Sapa, nơi phân phối
                                chính hãng các dòng xe tay ga Vespa và Piaggio. Tiếp nhận bảo hành và bảo
                                dưỡng chính hãng, cung cấp dịch vụ sơn xe Vespa, Custom color Vespa, cứu
                                hộ tại nhà và phân phối phụ tùng phụ kiện chính hãng khu vực phía bắc
                                Tp.HCM.
                            </span>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <strong>
                                <span style={{ fontSize: 14 }}>
                                    <em>
                                        Bản đồ hướng dẫn đường đi đến trung tâm Vespa Nguyễn Oanh, Quận Gò
                                        Vấp.
                                    </em>
                                </span>
                            </strong>
                        </p>
                        <div
                            style={{
                                maxWidth: "100%",
                                listStyle: "none",
                                transition: "none",
                                overflow: "hidden",
                                width: "100%",
                                height: 250
                            }}
                        >
                            <div
                                id="embeddedmap-canvas"
                                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                            >
                                <iframe
                                    frameBorder={0}
                                    scrolling="no"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.80257146424!2d106.67709461432084!3d10.82641559228764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fc4d8b0d31%3A0xe26e679057f27439!2sVespa%20Sapa%20Quang%20Trung!5e0!3m2!1svi!2s!4v1677122638425!5m2!1svi!2s"
                                    style={{ height: "100%", width: "100%", border: 0 }}
                                />
                            </div>
                            <a
                                className="googlemaps-code"
                                href="https://www.embed-map.com"
                                id="enablemap-data"
                            >
                                https://www.embed-map.com
                            </a>
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "#embeddedmap-canvas img{max-height:none;max-width:none!important;background:none!important;}\n"
                                }}
                            />
                        </div>
                        <p>
                            <strong>
                                <em>
                                    <span style={{ fontSize: 14 }}>
                                        Không gian Showroom Vespa Nguyễn Oanh, Quận Gò Vấp.
                                    </span>
                                </em>
                            </strong>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <img
                                data-thumb="original"
                                src="//bizweb.dktcdn.net/100/394/903/files/dai-ly-vespa-sapa-nguyen-oanh.jpg?v=1702639351681"
                                style={{ width: "100%" }}
                            />
                        </p>
                        <p>
                            <span style={{ fontSize: 14 }}>
                                📍 Địa chỉ:&nbsp;130 Nguyễn Oanh, Phường 7, Quận Gò Vấp, TP Hồ Chí Minh.
                                <br />
                                ☎️&nbsp;Tổng đài trung tâm:{" "}
                                <strong>
                                    <a href="tel:1900252633">1900252633 </a>
                                </strong>
                                - Chọn <strong>PHÍM&nbsp;4</strong>, chọn tiếp&nbsp;
                                <strong>PHÍM 2 gặp Trung tâm Vespa Sapa Nguyễn Oanh.</strong>
                                <br />☎ Bán hàng:&nbsp;
                                <u>
                                    <strong>
                                        <a href="tel:02838941772">028.38941772</a>
                                    </strong>
                                </u>{" "}
                                -&nbsp;(8h00 - 20h00 từ Thứ Hai đến chủ Nhật).
                                <br />☎ Dịch vụ Bảo dưỡng, Sữa chữa, Bảo hành, Cứu hộ:{" "}
                                <strong>
                                    <a href="tel:02838941771">028.38941771</a>
                                </strong>{" "}
                                (8h00 - 18h00 từ Thứ Hai đến chủ Nhật).
                            </span>
                        </p>
                    </div>

                </div>
                <div className="col-span-1">
                    <ProductList />
                </div>
            </div>
        </div>
    )
}
