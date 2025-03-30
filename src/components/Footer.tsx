import { MapPin, FileText, Phone, Wrench, Headphones, Mail } from "lucide-react";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="bg-blue-500 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {/* Cột 1 - Thông tin công ty */}
                <div className="flex flex-col gap-2 font-semibold">
                    <Image src="/assets/logo_footer.webp" alt="" className="mb-4" width={150} height={100} />
                    <div className="flex gap-2">
                        <MapPin size={20} className="text-red-700" />
                        <p>531 Đường 3 Tháng 2, P.8, Quận 10, Tp. Hồ Chí Minh</p>
                    </div>
                    <div className="flex gap-2">
                        <FileText size={20} className="text-red-700" />
                        <p>MST: 0304913178, ngày cấp: 30/03/2007</p>
                    </div>
                    <div className="flex gap-2">
                        <Phone size={20} className="text-red-700" />
                        <p >Mua xe: <span className="hover:text-red-500 cursor-pointer">090 276 33 99</span></p>
                    </div>
                    <div className="flex gap-2">
                        <Wrench size={20} className="text-red-700" />
                        <p>Sửa xe: <span className="hover:text-red-500 cursor-pointer">0909 53 88 23</span></p>
                    </div>
                    <div className="flex gap-2">
                        <Headphones size={20} className="text-red-700" />
                        <p >Tổng đài: <span className="hover:text-red-500 cursor-pointer">1900252633</span></p>
                    </div>
                    <div className="flex gap-2">
                        <Mail size={20} className="text-red-700" />
                        <p className="hover:text-red-500 cursor-pointer">customercare@sapa.com.vn</p>
                    </div>
                    <Image src="/assets/logo_bct.webp" alt="" className=" mt-2" width={200} height={100} />
                </div>

                {/* Cột 2 - Hệ thống cửa hàng */}
                <div>
                    <h3 className="text-lg font-bold"> HỆ THỐNG CỬA HÀNG & BẢO DƯỠNG</h3>
                    <ul className="mt-2 space-y-2 text-base">
                        <li className="hover:text-red-500 hover:translate-x-2.5 cursor-pointer"><strong>Vespa Sapa 223 - 233 Cộng Hòa, Q.Tân Bình</strong><br />Bán hàng: 028.38116414 | Dịch vụ: 028.38116414 - Line 101</li>
                        <li className="hover:text-red-500 hover:translate-x-2.5 cursor-pointer"><strong>Vespa Sapa 130 Nguyễn Oanh, P.7, Q.Gò Vấp</strong><br />Bán hàng: 028.38941772 | Dịch vụ: 028.38941771</li>
                        <li className="hover:text-red-500 hover:translate-x-2.5 cursor-pointer"><strong>Vespa Sapa 372-374 Nguyễn Thị Thập, Tân Quy, Q.7</strong><br />Bán hàng: 028.62989905 | Dịch vụ: 028.62989915</li>
                    </ul>
                </div>

                {/* Cột 3 - Sản phẩm & Dịch vụ */}
                <div>
                    <h3 className="text-lg font-bold text-white"> SẢN PHẨM</h3>
                    <ul className="mt-2 space-y-1">
                        <li className="hover:text-red-500 cursor-pointer">Xe Vespa</li>
                        <li className="hover:text-red-500 cursor-pointer">Xe Piaggio</li>
                        <li className="hover:text-red-500 cursor-pointer">Phụ tùng phụ kiện</li>
                    </ul>
                    <h3 className="text-lg font-bold text-white mt-4"> DỊCH VỤ</h3>
                    <ul className="mt-2 space-y-1">
                        <li className="hover:text-red-500 cursor-pointer">Chính sách bảo hành</li>
                        <li className="hover:text-red-500 cursor-pointer">Trung tâm Bảo hành Bảo dưỡng</li>
                        <li className="hover:text-red-500 cursor-pointer">Sơn xe Vespa</li>
                    </ul>
                </div>

                {/* Cột 4 - Hỗ trợ khách hàng */}
                <div>
                    <h3 className="text-lg font-bold text-white">HỖ TRỢ KHÁCH HÀNG</h3>
                    <ul className="mt-2 space-y-1">
                        <li className="hover:text-red-500 cursor-pointer">Phương thức giao hàng</li>
                        <li className="hover:text-red-500 cursor-pointer">Phương thức thanh toán</li>
                        <li className="hover:text-red-500 cursor-pointer">Chính sách bảo mật</li>
                        <li className="hover:text-red-500 cursor-pointer">Điều khoản sử dụng</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}