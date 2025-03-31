import * as Tabs from "@radix-ui/react-tabs";
import "./tabs.css";
import ReadMore from "@/components/MoreContent";
import ProductMoreInfo from "./ProductMoreInfo";
function ProductTabsContent() {
    return (
        <div className="w-full">
            <Tabs.Root defaultValue="info">
                <Tabs.List className="flex border-b w-full gap-4 tab-content-list">
                    <Tabs.Trigger value="info" className="tab-trigger">
                        THÔNG TIN SẢN PHẨM
                    </Tabs.Trigger>
                    <Tabs.Trigger value="promo" className="tab-trigger">
                        ƯU ĐÃI MUA HÀNG
                    </Tabs.Trigger>
                    <Tabs.Trigger value="review" className="tab-trigger">
                        ĐÁNH GIÁ SẢN PHẨM
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="info" className="tab-content">
                    <ReadMore>
                        <ProductMoreInfo />
                    </ReadMore>
                </Tabs.Content>
                <Tabs.Content value="promo" className="tab-content">
                    Nhà phân phối Vespa đầu tiên tại Việt Nam, Với 35 năm phân phối chính hãng. Giá ưu đãi tốt nhất toàn thị trường Việt Nam. <br />
                    <strong>• VỀ THANH TOÁN:</strong> <br />
                    1/ Piaggio Sapa tiếp nhận thanh toán bằng tiền mặt, thẻ, chuyển khoản. <br />
                    2/ Hỗ trợ trả góp 12 tháng lãi suất 0% cho Vespa Sprint, Primavea, Liberty, Medley. <br />
                    3/ Hỗ trợ trả góp qua thẻ tín dụng (29 ngân hàng) cho Vespa Sprint, Primavea, Liberty, Medley. <br />
                    4/ Hỗ trợ trả góp cho Vespa GTS, GTV. <br />
                    <strong>• VỀ VẬN CHUYỂN:</strong> <br />
                    1/ Giao xe tận nhà trên toàn quốc. <br />
                    2/ Khách hàng có thể nhận xe tại nhà mà không cần đến đại lý. <br />
                    <strong>• VỀ HỖ TRỢ ĐỔI XE CŨ MUA XE MỚI:</strong> <br />
                    1/ Chính sách ưu đãi khi đổi xe cũ lấy Vespa/Piaggio mới. <br />
                    2/ Tặng Voucher bảo dưỡng 6000km đầu tiên. <br />
                    <strong>• DỊCH VỤ ĐĂNG KÝ BIỂN SỐ:</strong> <br />
                    1/ Hỗ trợ đăng ký biển số trên toàn quốc. <br />
                    2/ Ra biển nhanh chóng. <br />
                    <strong>• DỊCH VỤ HỖ TRỢ SAU KHI MUA XE:</strong> <br />
                    1/ Cứu hộ tận nhà tại Tp.HCM. <br />
                    2/ Custom màu xe theo yêu cầu, bảo hành màu chính hãng 2 năm. <br />
                    3/ Ưu đãi bảo hành, bảo dưỡng lên đến 7%. <br />
                    4/ Cài đặt App theo dõi tình trạng xe (chỉ có tại Piaggio Sapa). <br />
                    5/ Bảo hành, bảo dưỡng theo tiêu chuẩn Piaggio Việt Nam. <br />
                    * Liên hệ Hotline: <strong>0902763399</strong>
                </Tabs.Content>
                <Tabs.Content value="review" className="tab-content">
                    <div className="w-full bg-blue-300 p-4 flex flex-col gap-4 text-center">
                        <div>Hiện tại sản phẩm chưa có đánh giá nào hãy là người đầu tiên.</div>
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
}

export default ProductTabsContent;