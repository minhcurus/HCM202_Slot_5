import { Metadata } from "next";
import { ThamNhungClient } from "./tham-nhung-client";

export const metadata: Metadata = {
  title: "Tham nhũng - Giặc nội xâm cần đánh bại",
  description: "Infographic về vấn đề tham nhũng - một trong ba giặc nội xâm mà Đảng Cộng sản Việt Nam cần đối phó",
};

export default function ThamNhungPage() {
  return <ThamNhungClient />;
}