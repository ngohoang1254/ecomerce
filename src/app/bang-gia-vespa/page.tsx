import Hero from "@/components/Hero";
import HotProduct from "../[slug]/component/HotProduct";
import ProductList from "../[slug]/component/ProductList";

export default function PriceVespaNews() {
    const vespaData = [
        { id: 1, origin: "Việt Nam", model: "Vespa Primavera ABS125 I-Get Led", price: "77.800.000đ" },
        { id: 2, origin: "Việt Nam", model: "Vespa Primavera S125 I-Get Led", price: "80.000.000đ" },
        { id: 3, origin: "Việt Nam", model: "Vespa Primavera Color Vibe 125", price: "86.660.000đ" },
        { id: 4, origin: "Việt Nam", model: "Vespa Primavera Mickey Mouse 125", price: "86.800.000đ" },
        { id: 5, origin: "Việt Nam", model: "Vespa Sprint ABS125 I-Get Led", price: "81.000.000đ" },
        { id: 6, origin: "Việt Nam", model: "Vespa Sprint S125 I-Get Led", price: "83.300.000đ" },
        { id: 7, origin: "Việt Nam", model: "Vespa Sprint Carbon 125 I-Get Led", price: "84.600.000đ" },
        { id: 8, origin: "Việt Nam", model: "Vespa Sprint S125 I-Get 2025", price: "90.000.000đ" },
        { id: 9, origin: "Việt Nam", model: "Vespa Sprint TFT 125 I-Get Led", price: "96.900.000đ" },
        { id: 10, origin: "Việt Nam", model: "Vespa Sprint S150 I-Get Led", price: "97.800.000đ" },
        { id: 11, origin: "Việt Nam", model: "Vespa Sprint TFT150 I-Get Led", price: "110.000.000đ" },
        { id: 12, origin: "Việt Nam", model: "Vespa Sprint Tech 125 I-Get 2025", price: "103.800.000đ" },
        { id: 13, origin: "Việt Nam", model: "Vespa Sprint Tech 150 I-Get 2025", price: "119.800.000đ" },
        { id: 14, origin: "Việt Nam", model: "Vespa GTS 150 Classic (Khóa Smartkey)", price: "126.500.000đ" },
        { id: 15, origin: "Việt Nam", model: "Vespa GTS 150 Super Sport (Khóa Smartkey)", price: "137.000.000đ" },
        { id: 16, origin: "Việt Nam", model: "Vespa GTS 300 Super Tech (Khóa Smartkey)", price: "158.600.000đ" },
        { id: 17, origin: "Việt Nam", model: "Vespa GTV 300HPE (Khóa Smartkey)", price: "159.800.000đ" },
        { id: 18, origin: "Italia", model: "Vespa 946 Snake (2025)", price: "Chờ công bố" },
        { id: 19, origin: "Việt Nam", model: "Piaggio Liberty STD 125Iget 2025", price: "57.500.000đ" },
        { id: 20, origin: "Việt Nam", model: "Piaggio Liberty S 125 Iget 2025", price: "57.900.000đ" },
        { id: 21, origin: "Việt Nam", model: "Piaggio Liberty Z125 Iget 2025", price: "59.300.000đ" },
        { id: 22, origin: "Việt Nam", model: "Piaggio Medley S125", price: "80.000.000đ" },
        { id: 23, origin: "Việt Nam", model: "Piaggio Medley S150", price: "96.800.000đ" },
        { id: 24, origin: "Italia", model: "Piaggio Beverly S400", price: "235.000.000đ" },
        { id: 25, origin: "Italia", model: "Piaggio MP3 400HPE Sport", price: "340.000.000đ" },
    ];
    return (
        <div>
            <Hero />
            <div className="container mx-auto grid md:grid-cols-4 grid-cols-1 gap-8 my-8 px-4">
                <div className="col-span-3">
                    <div>
                        <div className="content-page rte">
                            <h2 style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 18 }}>
                                    <strong>BẢNG GIÁ XE VESPA | GIÁ XE VESPA 2025 CHÍNH HÃNG.</strong>
                                </span>
                            </h2>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Thương hiệu xe Vespa, Piaggio luôn là những sản phẩm xe tay ga đăng cấp và
                                    nổi tiếng nhất trên toàn thế giới. Với các dòng xe Vespa có rất nhiều dòng
                                    xe cũng nhưng nhiều phân khúc khác nhau từ cao cấp để các dòng tay ga siêu
                                    sang như Vespa 946. <strong>Vespa Sapa</strong> là nhà phân phối xe Vespa,
                                    Piaggio chính hãng đầu tiên tại Việt Nam đã hơn 35 năm. Và là đơn vị được
                                    ủy quyền chính thức từ Piaggio Việt Nam &amp; Piaggio Italia phân phối
                                    trực tiếp các dòng xe tay ga Vespa, Piaggio tại thị trường Việt Nam. Chúng
                                    tôi cam kết bán đúng giá từ nhà sản xuất và công bố bảng giá bán chính
                                    thức từ nhà máy Piaggio.
                                </span>
                            </p>
                            <h2 style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 18 }}>
                                    <strong>Bảng giá xe vespa, Piaggio Tháng 03.2025.</strong>
                                </span>
                            </h2>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ lineHeight: 1 }}>
                                    <span style={{ fontSize: 16 }}>
                                        Giá xe Vespa đã bao gồm VAT (giá bán niêm yết), chưa bao gồm phí đăng ký
                                        biển số và thuế trước bạ tùy theo khu vực đăng ký xe. Quý khách hàng cần
                                        biết giá chính xác bao gồm phí ra biển số vui lòng gọi điện trực tiếp
                                        tổng đài trung tâm để được tư vấn. Đây là bảng giá Vespa mới nhất hiện
                                        tại, cập nhật những phiên bản mới nhất (Không update phiên bản cũ) tại
                                        thị trường Việt Nam.
                                    </span>
                                </span>
                            </p>
                            <table className="min-w-full border border-gray-300 text-sm text-left my-4">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border px-4 py-2">STT</th>
                                        <th className="border px-4 py-2">Nơi sản xuất/lắp ráp</th>
                                        <th className="border px-4 py-2">Dòng xe</th>
                                        <th className="border px-4 py-2">Giá bán xe (Đã có VAT)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vespaData.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-100">
                                            <td className="border px-4 py-2 text-center">{item.id}</td>
                                            <td className="border px-4 py-2">{item.origin}</td>
                                            <td className="border px-4 py-2">{item.model}</td>
                                            <td className="border px-4 py-2">{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ lineHeight: 1 }}>
                                    <span style={{ fontSize: 16 }}>
                                        Mọi chi tiết vui lòng liên hệ trực tiếp Hotline trung tâm Vespa Sapa:{" "}
                                        <u>
                                            <strong>
                                                <a href="tel:02822355355">028 22 355 355</a>
                                            </strong>
                                        </u>
                                        . Hoặc đến trực tiếp các trung tâm Vespa Sapa để được xe trực tiếp các
                                        mẫu xe Vespa mới nhất Tháng 03.2025.&nbsp;
                                    </span>
                                </span>
                                <span style={{ fontSize: 16 }}>
                                    Lấy giá ưu đãi gọi ngay 📱Hotline:{" "}
                                    <strong>
                                        <a href="tel:02822355355">02822355355</a>
                                    </strong>
                                    .<br />
                                    ✔️ Gửi nơi đký biển số vào{" "}
                                    <a href="https://zalo.me/02822355355">Zalo 02822355355</a> - Miễn phí check
                                    giá lăn bánh.
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    <strong>
                                        Ưu đãi vàng cuối tháng Ba tại Vespa Sapa
                                        <br />
                                        NGÀY VÀNG VESPA - ƯU ĐÃI NGAY 3.500.000đ!
                                    </strong>
                                    <br />
                                    Tạm biệt tháng Ba đầy yêu thương, Piaggio Sapa xin dành tặng những yêu
                                    thương đến mọi khách hàng mua xe Vespa/Piaggio. Cơ hội tuyệt vời với NGÀY
                                    VÀNG VESPA - TẠM BIỆT THÁNG BA NHÂN BA ƯU ĐÃI, Tặng ngay 3.500.000đ cho
                                    mọi khách hàng mua xe Vespa, Medley.
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <img
                                    data-thumb="original"
                                    style={{ width: "100%" }}
                                    src="//bizweb.dktcdn.net/100/394/903/files/banner-ngay-vang-uu-dai-3tr500-28-03-1.jpg?v=1743071420330"
                                />
                                <br />
                                <span style={{ fontSize: 16 }}>
                                    🔥Mua xe tại Piaggio Sapa sẽ được tài trợ miễn phí công bảo dưỡng 6000km
                                    đầu tiên và sử dụng App Piaggio Sapa giúp kiểm soát hoàn toàn về tình
                                    trạng xe, lịch sử bảo dưỡng trong suốt thời gian sử dụng xe sau này.
                                </span>
                            </p>
                            <h2 style={{ textAlign: "justify" }}>
                                <strong>
                                    <span style={{ fontSize: 16 }}>
                                        GIÁ BÁN CHI TIẾT VÀ THÔNG SỐ TỪNG DÒNG XE VESPA, PIAGGIO.
                                    </span>
                                </strong>
                            </h2>
                            <h3>
                                <span style={{ fontSize: 16 }}>
                                    <strong>
                                        1 - Giá xe Vespa Sprint 125 - Mẫu xe Sprint mới nhất hiện tại.
                                    </strong>
                                </span>
                            </h3>
                            <p>
                                <span style={{ lineHeight: 1 }}>
                                    <span style={{ fontSize: 16 }}>
                                        Vespa Sprint dẫn đầu trong tất cả các dòng xe Vespa bán chạy nhất tại
                                        Việt Nam cũng như trên toàn thế giới. Hiện có 3 phiên bản Sprint 125 với
                                        giá khác nhau cho 3 phiên bản này.
                                    </span>
                                </span>
                            </p>
                            <p>
                                <span style={{ lineHeight: 1 }}>
                                    <span style={{ fontSize: 16 }}>
                                        <em>
                                            <strong>*Giá bán Vespa Sprint S125 bản 2025 là 90.000.000đ.</strong>
                                        </em>
                                    </span>
                                </span>
                            </p>
                            <p>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-sprint-s125-2025-blue-moi.jpg?v=1737357017886"
                                    style={{ width: "100%" }}
                                />
                            </p>
                            <p>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ lineHeight: 1 }}>
                                        <em>
                                            Với giá bán 90.000.000đ đã bao gồm VAT, chưa bao gồm phí đký&nbsp;ra
                                            biển số và lệ phí trước bạ tùy theo khu vực các tỉnh
                                        </em>
                                        . Dòng Vespa Sprint S125 bản mới nhất 2025 có hàng loạt nâng cấp mới.
                                    </span>
                                </span>
                            </p>
                            <p>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ lineHeight: 1 }}>
                                        <strong>Thông số cơ bản:</strong>
                                        <br />
                                        * Đồng hồng LCD kết nối Spmartphone,
                                        <br />
                                        * Cấu trúc mâm mới: thay đổi mới hoàn toàn bộ mâm mới,
                                        <br />
                                        * Kính chiếu hậu: Thay đổi mới kính chiếu hậu lục giác,
                                        <br />
                                        * Yên xe: Yên bọc da, thay đổi mới yên.
                                        <br />
                                        * Chi tiết khác: Thay đổi Cavet, viền và bộ tem mới được tinh chỉnh.
                                        <br />* Động cơ: Trang bị động cơ Iget 125cc, công suất 11Hp,{" "}
                                    </span>
                                    Mô-Men xoắn
                                    <span style={{ lineHeight: 1 }}>
                                        : 10.4Nm.
                                        <br />
                                        * Trang bị: Phanh ABS bánh trước, sử dụng khóa từ và tích hợp cổng sạc
                                        USB.
                                        <br />
                                        * Trọng lượng 130kg, chiều cao yên xe 790mm.
                                        <br />
                                        Xe hiện có sẵn khách hàng có thể tùy chọn 3 màu: Blue, Green và Orange.
                                    </span>
                                </span>
                            </p>
                            <p>
                                <span style={{ lineHeight: 1 }}>
                                    <span style={{ fontSize: 16 }}>
                                        <em>
                                            <strong>*Giá bán Vespa Sprint ABS 125 là 81.000.000đ.</strong>
                                        </em>
                                    </span>
                                </span>
                            </p>
                            <h4 style={{ textAlign: "justify" }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-srpint-abs-cherry-125-12.jpg?v=1732854131901"
                                    style={{ width: "100%" }}
                                />
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ lineHeight: 1 }}>
                                        <em>
                                            Với giá bán 81.000.000đ đã bao gồm VAT, chưa bao gồm phí đký&nbsp;ra
                                            biển số và lệ phí trước bạ tùy theo khu vực các tỉnh
                                        </em>
                                        .{" "}
                                    </span>
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    <strong>Thông số cơ bản:</strong>
                                    <br />
                                    * Đồng hồ Analog, đèn pha trước Full Led 2 tầng, đèn hậu full Led.
                                    <br />
                                    * Trang bị động cơ Iget 125cc, công suất 11Hp, Mô-Men xoắn: 10.4Nm.
                                    <br />
                                    * Yên xe: bọc da, có hỗ trợ yên thấp, mở yên: mở điện bằng nút bấm.
                                    <br />
                                    * Viền/tem: Viền Crome, không tem decal, kính chiếu hậu Crome.
                                    <br />
                                    * Dung tích bình xăng 7.5lit, mức tiêu thụ 2,63lit/100km.
                                    <br />
                                    * Phanh ABS bánh trước, sử dụng khóa từ và tích hợp cổng sạc USB.
                                    <br />* Trọng lượng 130kg, chiều cao yên xe 790mm.
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ lineHeight: 1 }}>
                                        Dòng Vespa Sprint ABS 125 được ưu đãi mua trả góp tại các hệ thống đại
                                        lý Vespa Sapa chính hãng. Khách hàng có thể mua trả góp trong 12th với
                                        lãi suất 0% và mức trả trước tối thiểu từ 35tr + Phí đký&nbsp;ra biển
                                        số, phần còn lại trả góp trong 12th.
                                    </span>
                                </span>
                            </p>
                            <h4 style={{ textAlign: "justify" }}>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa Sprint S 125 là 83.300.000đ.
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <h4 style={{ textAlign: "justify" }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-srpint-s-black-125-8.jpg?v=1732854721854"
                                    style={{ width: "100%" }}
                                />
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ lineHeight: 1 }}>
                                    <span style={{ fontSize: 16 }}>
                                        Giá bán 83.300.000đ đã bao gồm VAT chưa bao gồm lệ phí trước bạ và phí
                                        đký ra biển số tùy theo từng khu vực cụ thể.{" "}
                                    </span>
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    <strong>Thông số cơ bản:</strong>
                                    <br />
                                    * Đồng hồ Analog, đèn pha trước Full Led 2 tầng, đèn hậu full Led.
                                    <br />
                                    * Trang bị động cơ Iget 125cc, công suất 11Hp, Mô-Men xoắn: 10.4Nm.
                                    <br />
                                    * Yên xe: bọc da, có hỗ trợ yên thấp, mở yên: mở điện bằng nút bấm.
                                    <br />
                                    * Viên/tem: Viền sơn đen, tem decal đỏ + trắng, kính chiếu hậu sơn đen.
                                    <br />
                                    * Dung tích bình xăng 7.5lit, mức tiêu thụ 2,63lit/100km.
                                    <br />
                                    * Phanh ABS bánh trước, sử dụng khóa từ, tích hợp cổng sạc USB.
                                    <br />* Trọng lượng 130kg, chiều cao yên xe 790mm.
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ lineHeight: 1 }}>
                                    <span style={{ fontSize: 16 }}>
                                        Với dòng Vespa Sprint S 125 được ưu đãi hỗ trợ mua trả góp. Khách hàng
                                        trả trước từ 35tr + Phí đky ra biển số, phần còn lại trả góp trong 12th
                                        với lãi suất 0%. Thủ tục hỗ trợ nhanh và đơn giản.
                                    </span>
                                </span>
                            </p>
                            <h4>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa Sprint S TFT 125 là 96.900.000đ.
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <p>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-srpint-s-ronzeantico-150-tft-6.jpg?v=1732855345624"
                                    style={{ width: "100%" }}
                                />
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ lineHeight: 1 }}>
                                    <span style={{ fontSize: 16 }}>
                                        Đây là phiên bản Sprint mới nhất trang bị hiện đại nhất với đồng hồ TFT
                                        có thể kế nối với Smartphone. Giá bán 96.900.000đ đã bao gồm VAT chưa
                                        bao gồm lệ phí trước bạ và phí đký ra biển số.{" "}
                                    </span>
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    <strong>Thông số cơ bản:</strong>
                                    <br />
                                    * Đồng hồ TFT kết nối với Smartphone, đèn pha trước Full Led 2 tầng, đèn
                                    hậu full Led.
                                    <br />
                                    * Trang bị động cơ Iget 125cc, công suất 11Hp, Mô-Men xoắn: 10.4Nm.
                                    <br />
                                    * Yên xe: bọc da cao cấp full đen, mở yên bằng nút bấm (Điện).
                                    <br />
                                    * Viên/tem: Viền sơn đen, không tem decal, kính chiếu hậu Crome.
                                    <br />
                                    * Dung tích bình xăng 7.5lit, mức tiêu thụ 2,63lit/100km.
                                    <br />
                                    * Phanh ABS bánh trước, sử dụng khóa từ, tích hợp cổng sạc USB.
                                    <br />* Trọng lượng 130kg, chiều cao yên xe 790mm.
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ lineHeight: 1 }}>
                                    <span style={{ fontSize: 16 }}>
                                        Xe được hỗ trợ mua trả góp với mức trả trước tối thiểu: 39tr + Phí đký
                                        ra biển số tùy theo khu vực. Phần còn lại hỗ trợ trả góp trong 12 với
                                        lãi suất góp 0%.
                                    </span>
                                </span>
                            </p>
                            <h3 style={{ textAlign: "justify" }}>
                                <span style={{ lineHeight: 1 }}>
                                    <strong>
                                        <span style={{ fontSize: 16 }}>
                                            2 - Giá xe Vespa Sprint 150 - Có 2 dòng xe cụ thể.
                                        </span>
                                    </strong>
                                </span>
                            </h3>
                            <h4>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa Sprint S 150 là 97.800.000đ
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <h4>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-srpint-s-white-125-21.jpg?v=1732855923706"
                                    style={{ width: "100%" }}
                                />
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Với những ai yêu&nbsp;thích sự mạnh mẽ, bức tốc nhanh và đầy
                                    phấn&nbsp;khích thì Sprint S 150 là chọn lựa hoàn hảo. Giá bán Sprint S
                                    150 97.800.000đ đã bao gồm VAT, chưa bao gồm lệ phí trước bạ và phí đký ra
                                    biển số.
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    <strong>Thông số cơ bản:</strong>
                                    <br />
                                    * Đồng hồ Analog, đèn pha trước Full Led 2 tầng, đèn hậu full Led.
                                    <br />
                                    * Trang bị động cơ Iget 155cc, công suất 12.8Hp, Mô-Men xoắn: 12.8Nm.
                                    <br />
                                    * Yên xe: bọc da, Mở cốp trước bằng chìa khóa, mở cốp sau bằng nút bấm
                                    (điện).
                                    <br />
                                    * Viên/tem: Viền sơn đen, tem decal đỏ + xám, kính chiếu hậu sơn đen.
                                    <br />
                                    * Dung tích bình xăng 7.5lit, mức tiêu thụ 2,7lit/100km.
                                    <br />
                                    * Phanh ABS bánh trước, sử dụng khóa từ, tích hợp cổng sạc USB.
                                    <br />* Trọng lượng 133kg, chiều cao yên xe 790mm,&nbsp;có hỗ trợ yên
                                    thấp.
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Xe được ưu đãi mua trả góp với mức trả trước 39tr + Phí đký ra biển số
                                    theo khu vực, phần còn lại hỗ trợ trả góp trong 12th với lãi suất 0%.
                                </span>
                            </p>
                            <h4>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa Sprint TFT 150 là 110.000.000đ.
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <h4>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-srpint-s-black-150-tft-13.jpg?v=1732856423104"
                                    style={{ width: "100%" }}
                                />
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Hiện là phiên bản Sprint cao cấp nhất và trang bị hiện đại nhất. Giá
                                    Sprint TFT 150 110.000.000đ chưa bao gồm lệ phí trước bạ và phí đký biển
                                    số theo khu vực. Xe trang bị đồng hồ TFT cực kỳ hiện đại có khả năng kết
                                    nối với Smartphone.{" "}
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    <strong>Thông số cơ bản:</strong>
                                    <br />
                                    * Đồng hồ TFT kết nối Smartphone, đèn pha trước Full Led 2 tầng, đèn hậu
                                    full Led.
                                    <br />
                                    * Trang bị động cơ Iget 155cc, công suất 12.8Hp, Mô-Men xoắn: 12.8Nm.
                                    <br />
                                    * Yên xe: bọc da cao cấp full đen, Mở cốp trước bằng chìa khóa, mở cốp sau
                                    bằng nút bấm (điện).
                                    <br />
                                    * Viên/tem: Viền sơn đen/đồng (tùy phiên bản màu đen hoặc màu đồng), không
                                    tem, kính chiếu hậu sơn đen/crome.
                                    <br />
                                    * Dung tích bình xăng 7.5lit, mức tiêu thụ 2,7lit/100km.
                                    <br />
                                    * Phanh ABS bánh trước, sử dụng khóa từ, tích hợp cổng sạc USB.
                                    <br />* Trọng lượng 133kg, chiều cao yên xe 790mm,&nbsp;có hỗ trợ yên
                                    thấp.
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Xe được ưu đãi mua trả góp với mức trả trước 39tr + Phí đký ra biển số
                                    theo khu vực, phần còn lại hỗ trợ trả góp trong 12th với lãi suất 0%.
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Xe được hỗ trợ mua trả góp với mức trả trước tối thiểu 44tr + Phí đký ra
                                    biển số theo hộ khẩu, phần còn lại trả góp trong 12th với lãi suất 0%.
                                </span>
                            </p>
                            <h3 style={{ textAlign: "justify" }}>
                                <span style={{ lineHeight: 1 }}>
                                    <strong>
                                        <span style={{ fontSize: 16 }}>
                                            3 - Giá xe Vespa Primavera - Có 4 dòng xe cụ thể bao gồm:
                                        </span>
                                    </strong>
                                </span>
                            </h3>
                            <h4>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa Primavera ABS 125&nbsp;là 77.800.000đ.
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <p>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-primavera-abs-gray-125-13.jpg?v=1732862492269"
                                    style={{ width: "100%" }}
                                />
                            </p>
                            <p>
                                <span style={{ lineHeight: 1 }}>
                                    <span style={{ fontSize: 16 }}>
                                        Vespa Primavera là biểu tượng của sự kiêu sa và điệu đà. Dù đã hơn 63
                                        năm kể từ khi ra mắt, rất nhiều phiên bản đã sản xuất nhưng nét đẹp và
                                        linh hồn của dòng xe này vẫn tồn tại mãi mãi theo năm tháng. Primavera
                                        ABS 125 bản mới nhất được hỗ trợ mua trả góp 0% lãi suất/12th cùng nhiều
                                        ưu đãi tuyệt vời khi mua tại các hệ thống Vespa Sapa.
                                    </span>
                                </span>
                            </p>
                            <h4>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa Primavera S 125&nbsp;là 80.000.000đ.
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <p>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-primavera-s-yellow-125-13.jpg?v=1732863259311"
                                    style={{ width: "100%" }}
                                />
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Là phiên bản nâng cấp từ Primavera ABS, Vespa Primavera S khác biệt ở phần
                                    bộ tem Sport và họa tiết đường viền, yên và mâm&nbsp;xe. Giá bán chính
                                    hãng 80tr bao gồm VAT. Xe được hỗ trợ mua trả góp với lãi suất 0% trong
                                    12th, khách hàng chỉ trả trước từ 36tr.
                                </span>
                            </p>
                            <h4>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa Primavera Color Vibe là 86.600.000đ.
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <p>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-primavera-color-viber-12.jpg?v=1732863788381"
                                    style={{ width: "100%" }}
                                />
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Đây là phiên bản đặc biệt của dòng Vespa Primavera. Với thiết kế họa tiết
                                    khác biệt hoàn toàn với các phiên bản Primavera còn lại, khách hàng mua
                                    Primavera Color Vibe sẽ tặng kèm bộ phụ kiện chính hãng đi kèm: Nón bảo
                                    hiểm 3/4, ba lô, mũ lưỡi chai.. theo tông màu xe. Xe hiện có 2 màu chính
                                    xanh và cam, có sẵn tại các hệ thống trung tâm Vespa Sapa.
                                </span>
                            </p>
                            <h4>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa Primavera Mickey Mouse là 86.800.000đ.
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/primavera-mickey-mouse-5.jpg?v=1732864171373"
                                    style={{ width: "100%" }}
                                />
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Piaggio hợp tác với hãng Disney nhân kỷ niệm 100 năm thành lập
                                    hãng.&nbsp;Đây là phiên bản đặc biệt giới hạn sản xuất&nbsp;của dòng Vespa
                                    Primavera Mickey Mouse. Với thiết kế họa tiết vô cùng đặc sắc, gắn liền
                                    với chú chuột Mickey Mouse nổi tiếng toàn thế giới. Giá bán phiên bản giới
                                    hạn sản xuất Primavdera Mickey Mouse là 86.8tr (VAT), xe có sẵn tại các hệ
                                    thống trung tâm Vespa Sapa.
                                </span>
                            </p>
                            <h3 style={{ textAlign: "justify" }}>
                                <span style={{ lineHeight: 1 }}>
                                    <strong>
                                        <span style={{ fontSize: 16 }}>
                                            4 - Giá xe Vespa GTS 150 - Có 2 dòng xe cụ thể bao gồm:
                                        </span>
                                    </strong>
                                </span>
                            </h3>
                            <h4>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa GTS 150 Classic là 126.500.000đ.
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Dòng xe mới của GTS 150 với 2 màu đen và màu kem theo phong cách cổ điển,
                                    nâng cấp mới hệ thống khóa Smartkey và yên và&nbsp;mân xe. Giá bán chính
                                    hãng là 126.5tr (bao gồm VAT).
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-gts-150-classic-7.jpg?v=1732864477954"
                                    style={{ width: "100%" }}
                                />
                            </p>
                            <h4>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa GTS 150 Super Sport&nbsp;là 137.000.000đ.
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Đây là dòng Vespa Super Sport thân lớn&nbsp;và là một phiên bản nâng cấp
                                    mới nhiều tính năng. Ở phiên bản mới xe nâng cấp hệ thống khóa từ sang
                                    Smartkey, thay đổi thiết kế kính chiếu hậu, mân xe và đèn hậu... cùng nâng
                                    cấp động cơ lên 155.5cc gia tăng sức mạnh và bức tốc nhanh hơn. Hiện giá
                                    bán chính hãng của Vespa GTS 150 Super Sport là 137.000.000đ (VAT). Xe có
                                    nhiều ưu đãi và hỗ trợ mua trả góp trong 12th.
                                </span>
                            </p>
                            <p>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-gts-super-sports-white-150-8.jpg?v=1732864844752"
                                    style={{ width: "100%" }}
                                />
                            </p>
                            <h3 style={{ textAlign: "justify" }}>
                                <span style={{ lineHeight: 1 }}>
                                    <strong>
                                        <span style={{ fontSize: 16 }}>
                                            5 - Giá xe Vespa GTS 300 Super Tech:
                                        </span>
                                    </strong>
                                </span>
                            </h3>
                            <h4>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa GTS 300 Super Tech bản Smartkey là 158.600.000đ.
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Phiên bản GTS 300 Super Tech bản khóa smartkey chỉ có 2 màu duy nhất là
                                    xanh dương đậm&nbsp;và ghi xám, xe trang bị động cơ 300cc HPE, khóa
                                    smartkey, màn hình TFT kết nối với Smartphone giúp quản lý cuộc gọi, tin
                                    nhắn... Giá bán hiện tại là 158.6tr (bao gồm VAT).&nbsp;
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/gia-xe-vespa-gts-300-super-tech-2023.jpg?v=1701425448155"
                                    style={{ width: "100%" }}
                                />
                            </p>
                            <h3 style={{ textAlign: "justify" }}>
                                <span style={{ lineHeight: 1 }}>
                                    <strong>
                                        <span style={{ fontSize: 16 }}>6 - Giá xe Vespa GTV300HPE:</span>
                                    </strong>
                                </span>
                            </h3>
                            <h4>
                                <em>
                                    <strong>
                                        <span style={{ lineHeight: 1 }}>
                                            <span style={{ fontSize: 16 }}>
                                                * Giá xe Vespa GTV300HPE bản Smartkey là 159.800.000đ.
                                            </span>
                                        </span>
                                    </strong>
                                </em>
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Phiên bản GTV300 mới trang bị khóa smartkey chỉ có 2 màu duy nhất là ghi
                                    bóng và màu be và ghi xám, xe trang bị động cơ 300cc HPE, khóa smartkey,
                                    màn hình TFT (Dạng tròn) kết nối với Smartphone giúp quản lý cuộc gọi, tin
                                    nhắn... Giá bán hiện tại là 159tr800 (bao gồm VAT).
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <img
                                    data-thumb="original"
                                    src="//bizweb.dktcdn.net/100/394/903/files/vespa-gtv-sei-giorni-300-9.jpg?v=1732865240690"
                                    style={{ width: "100%" }}
                                />
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Để nhận giá bán chính xác bao gồm ra biển số + Cavet theo từng khu vực cụ
                                    thể, quý khách hàng vui lòng liên hệ hotline hoặc gửi: Tên xe + Nơi đăng
                                    ký biển số vào Zalo tổng đài Vespa Sapa để được hỗ trợ nhanh nhất!
                                    <br />
                                    📱Hotline: <a href="tel:02822355355">02822355355</a>&nbsp;(Zalo)
                                    <br />
                                    <strong>HỆ THỐNG CỦA HÀNG ỦY QUYỀN VESPA VIỆT NAM.</strong>
                                    <br />
                                    ▪️ 531 Đường 3/2, Phường 8, Quận 10.
                                    <br />
                                    ▪️ 131 Kinh Dương Vương, P.12, Quận 6.
                                    <br />
                                    ▪️ 03 Quốc Hương, P.Thảo Điền, Quận 2.
                                    <br />
                                    ▪️ 130 Nguyễn Oanh, P.7, Q.Gò Vấp
                                    <br />
                                    ▪️ 223-233 Cộng Hòa, P.13, Q.Tân Bình.
                                    <br />
                                    ▪️ 372-374 Nguyễn Thị Thập, P.Tân Quy, Q.7.
                                    <br />
                                    ▪️ 239-245 Điện Biên Phủ, P.15, Q.Bình Thạnh
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: 16 }}>
                                    Vespa Sapa hỗ trợ giao xe tận nhà các tỉnh thành trên toàn quốc cho mọi
                                    khách hàng mua xe Vespa, Piaggio.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <ProductList />
                </div>
            </div>
        </div>
    )
}