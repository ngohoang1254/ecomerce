import { MapPin, FileText, Phone, Wrench, Headphones, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-blue-500 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {/* Cột 1 - Thông tin công ty */}
                <div className="flex flex-col gap-2 font-semibold">
                    <Image src="/assets/logo.jpeg" alt="" className="mb-4" width={150} height={100} />
                    <div className="flex gap-2">
                        <MapPin size={30} className="text-red-700" />
                        <p>Số 355-355A, Đường Lê Quang Định, Phường 5, Quận Bình Thạnh</p>
                    </div>
                    <div className="flex gap-2">
                        <FileText size={20} className="text-red-700" />
                        <p>MST: 0318853338</p>
                    </div>
                    {/* <div className="flex gap-2">
                        <Phone size={20} className="text-red-700" />
                        <p >Mua xe:
                            <a href="tel:02822355355">
                                <span className="hover:text-red-500 cursor-pointer">028 22 355 355</span>
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Wrench size={20} className="text-red-700" />
                        <p>Sửa xe:
                            <a href="tel:02822355355">
                                <span className="hover:text-red-500 cursor-pointer">028 22 355 355</span>
                            </a>
                        </p>
                    </div> */}
                    <div className="flex gap-2">
                        <Headphones size={20} className="text-red-700" />
                        <p >Tổng đài:
                            <a href="tel:02822355355">
                                <span className="hover:text-red-500 cursor-pointer">028 22 355 355</span>
                            </a></p>
                    </div>
                    <div className="flex gap-2">
                        <Mail size={20} className="text-red-700" />
                        <p className="hover:text-red-500 cursor-pointer">invoice@nhimotors.com</p>
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
                        <li className="hover:text-red-500 cursor-pointer">
                            <Link href="/vespa">
                                Xe Vespa
                            </Link>
                        </li>
                        <li className="hover:text-red-500 cursor-pointer">
                            <Link href="/piaggio">
                                Xe Piaggio
                            </Link>
                        </li>
                        <li className="hover:text-red-500 cursor-pointer">
                            <Link href="/phu-tung-phu-kien-vespa">
                                Phụ tùng phụ kiện
                            </Link>
                        </li>
                    </ul>
                    <h3 className="text-lg font-bold text-white mt-4"> DỊCH VỤ</h3>
                    <ul className="mt-2 space-y-1">
                        <li className="hover:text-red-500 cursor-pointer">
                            <Link href="/chinh-sach-bao-hanh">
                                Chính sách bảo hành
                            </Link>
                        </li>
                        <li className="hover:text-red-500 cursor-pointer">
                            <Link href="/bao-hanh-bao-duong-vespa">
                                Trung tâm Bảo hành Bảo dưỡng
                            </Link>
                        </li>
                        <li className="hover:text-red-500 cursor-pointer">
                            <Link href="/son-xe-vespa">
                                Sơn xe Vespa
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Cột 4 - Hỗ trợ khách hàng */}
                <div>
                    <h3 className="text-lg font-bold text-white">HỖ TRỢ KHÁCH HÀNG</h3>
                    <ul className="mt-2 space-y-1">
                        <li className="hover:text-red-500 cursor-pointer">
                            <Link href="/">
                                Phương thức giao hàng
                            </Link>
                        </li>
                        <li className="hover:text-red-500 cursor-pointer">
                            <Link href="/">
                                Phương thức thanh toán
                            </Link>
                        </li>
                        <li className="hover:text-red-500 cursor-pointer">Chính sách bảo mật</li>
                        <li className="hover:text-red-500 cursor-pointer">Điều khoản sử dụng</li>
                    </ul>
                </div>
            </div>
        </footer >
    );
}