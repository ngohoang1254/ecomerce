"use client"
import InputNumber from 'rc-input-number';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { FaFacebook } from "react-icons/fa";
import { useState } from 'react';


export default function ProductInfo() {
    const [amount, setAmount] = useState("1");
    return (
        <div className="flex flex-col gap-2 px-4">
            <div className="text-2xl font-bold text-black">
                Liberty STD White Luna
            </div>
            <div className="flex gap-2">
                <div>
                    <span>Thương hiệu: <span className="text-blue-500 cursor-pointer">Piaggio</span></span>
                </div>
                <div>
                    <span>Tình trạng: <span className="text-blue-500 cursor-pointer">Còn hàng</span></span>
                </div>
            </div>
            <div>
                <span>Mã SKU: <span className="text-blue-500 cursor-pointer">libertystd</span></span>
            </div>
            <div className="text-4xl font-bold text-blue-800">
                57.500.000₫
            </div>
            <div className="flex gap-4">
                <div className="flex">
                    <div className="px-4 cursor-pointer flex items-center text-gray-600 border-default"
                        onClick={() => {
                            const newAmounts = parseInt(amount) - 1;
                            if (newAmounts > 0) {
                                setAmount(newAmounts.toString())
                            }
                        }}

                    >-</div>
                    <Input className='max-w-[100px] rounded-none text-center border-default' value={amount} readOnly />
                    <div className="border-default px-4 cursor-pointer flex items-center text-gray-600"
                        onClick={() => {
                            const newAmounts = parseInt(amount) + 1;
                            if (newAmounts > 0) {
                                setAmount(newAmounts.toString())
                            }
                        }}
                    >+</div>
                </div>
                <Button className="font-bold bg-[#0660bb] cursor-pointer px-8">Đặt hàng</Button>
            </div>
            <div className="flex flex-col gap-2 text-sm mt-4">
                <div>Lấy giá ưu đãi gọi ngay 📱Hotline: <strong>
                    <a href="tel:0902763399">0902763399</a></strong>
                </div>
                <div>
                    ✔️ Gửi nơi đký biển số vào  <strong>
                        <a href="https://zalo.me/0902763399">Zalo 0902763399</a>
                    </strong> - Check giá lăn bánh
                </div>
                <div>
                    🏷 Tặng Combo quà hàng triệu đồng theo xe.
                </div>
                <div>
                    🔥Miễn phí bảo dưỡng đến 2 năm với gói Liberty Care.
                </div>
                <div>
                    🔥Ưu đãi ngay <strong>2.000.000đ</strong> khi mua
                </div>
                <div>
                    🔥Hỗ trợ đổi xe cũ mua xe Liberty 2025 mới nhất.
                </div>
                <div>
                    <strong>* Miễn phí giao xe tận nhà, thu tiền tận nhà toàn quốc.</strong>
                </div>
                <div>* Ủy quyền phân phối từ Piaggio Việt Nam, Bảo hành 3 năm/30.000km. </div>
                <div>
                    🏷 Trả góp 0% lãi suất/12th, Hỗ trợ cà thẻ, <strong>không phí hồ sơ</strong></div>
                <div>🔥Hỗ trợ đăng ký xe, biển số cho khách tỉnh, Tp.HCM. </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="font-bold">Chia sẻ: </div>
                <FaFacebook size={20} color='blue' />
            </div>
            <div className="w-full p-2 border border-[#fadfd2] bg-[#fef9f5]">
                <a href="tel: 0902763399" className="text-green-700">
                    Hỗ trợ mua hàng online: <strong className="text-red-700 font-bold text-lg">0902763399</strong>
                </a>
            </div>
        </div>
    )
}