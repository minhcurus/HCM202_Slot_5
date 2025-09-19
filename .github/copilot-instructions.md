# copilot-instructions.md

> Mục tiêu: Tạo một website Next.js (App Router) giao diện tối (dark), tiếng Việt, có một trang giới thiệu chung và **mỗi người một trang riêng**. **Toàn bộ nội dung hiển thị phải lấy 100% từ file Markdown cung cấp, không được sửa, cắt, biên tập, dịch hay thêm chữ vào phần nội dung.** Chỉ được định dạng bằng markdown renderer (tiêu đề, đoạn, danh sách) nhưng **không thay đổi văn bản gốc**.

## 1) Công nghệ & ràng buộc
- **Next.js 14+ (App Router)**, **TypeScript**.
- **Tailwind CSS** + cấu hình **dark theme** (mặc định dark).
- **shadcn/ui** cho các thành phần UI cơ bản (Card, Button, NavigationMenu, Separator, ScrollArea).
- **remark/rehype** pipeline để render Markdown **nguyên văn** (không custom transformer làm thay đổi text).
- **Không dùng bất kỳ thao tác chỉnh sửa chuỗi** (replace, trim nâng cao, lọc bỏ câu) trên phần nội dung lấy từ markdown.
- **i18n** mặc định `vi-VN` (site tiếng Việt).
- **SEO** cơ bản (title, description, open graph).

## 2) Nguồn dữ liệu (Markdown)
- Thư mục dữ liệu: `content/` trong repo.
- Đặt file đã cung cấp vào: `content/slot5.md`. **Nội dung file này phải giữ nguyên 100%** như đã nhận (không đổi ký tự, xuống dòng, dấu cách).
- File gồm các phần gắn nhãn người như sau (ví dụ): `Minh:`, `Bảo :`, `Hưng:`, `Vinh:`, `Nhân:` ở đầu mỗi cụm nội dung. **Dùng regex** để tách trang theo các nhãn này, **nhưng không xóa nhãn khỏi phần hiển thị** (nhãn vẫn nằm trong nội dung render).
  - Regex gợi ý (giữ nguyên chữ hoa/thường, khoảng trắng): `^(Minh:|Bảo\\s*:|Hưng:|Vinh:|Nhân:)` ở chế độ `m` (multiline).

## 3) Kiến trúc thư mục
```
/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx                # Trang giới thiệu chung
│  ├─ [person]/
│  │   └─ page.tsx            # Trang động: /minh, /bao, /hung, /vinh, /nhan
│  └─ api/
├─ components/
│  ├─ site-header.tsx         # Navbar, switch theme (vẫn mặc định dark)
│  ├─ site-footer.tsx
│  ├─ md-content.tsx          # Markdown renderer (không chỉnh text)
│  └─ card-grid.tsx           # Lưới thẻ ở trang chủ (liệt kê các trang)
├─ lib/
│  ├─ content.ts              # Đọc file, tách phần chung & từng người
│  └─ types.ts
├─ content/
│  └─ slot5.md                # (do người dùng cung cấp, giữ nguyên 100%)
├─ styles/
│  └─ globals.css
└─ tailwind.config.ts
```

## 4) Tách nội dung từ Markdown (không thay đổi text)
- Viết hàm trong `lib/content.ts`:
  - `readRaw(): Promise<string>` đọc `content/slot5.md` (UTF-8).
  - `splitByPerson(raw: string): { common: string; minh?: string; bao?: string; hung?: string }`
    - **common**: phần mở đầu/giới thiệu chung (từ đầu file tới trước người đầu tiên) — **render nguyên văn** ở trang `/`.
    - **minh/bao/hung**: cắt theo mốc nhãn dòng đầu (ví dụ `Minh:`, `Bảo :`, `Hưng:`, `Vinh:`, `Nhân:`) cho tới trước nhãn kế tiếp hoặc hết file — **render nguyên văn** ở `/minh`, `/bao`, `/hung`, `/vinh`,`/nhan`.
  - **Không** loại bỏ nhãn, **không** reformat, **không** chèn thêm chữ.
- Để robust, chuẩn hóa key route:
  - `minh` ⇔ mọi nhãn bắt đầu bằng `Minh:`
  - `bao`  ⇔ `Bảo :` (có thể có khoảng trắng trước dấu `:`)
  - `hung` ⇔ `Hưng:`
  - `vinh` ⇔ `Vinh:`
  - `nhan` ⇔ `Nhân:`
- Nếu không tìm thấy nhãn, **không tạo trang đó**.

## 5) Render Markdown
- `components/md-content.tsx` sử dụng `react-markdown` + `rehype-raw` + `remark-gfm`.
- Chỉ map các phần tử **không thay đổi text**:
  - `p`, `h1..h6`, `ul/ol/li`, `blockquote`, `code`, `pre`.
- **Tuyệt đối không** thêm/bớt ký tự, ký hiệu, hay tự ý chia/ghép đoạn.
- Font đề xuất: `Inter` hoặc `Lexend` (Google Fonts).

## 6) UI/UX (dark, đẹp, thân thiện)
- **Màu nền**: tông tối (`zinc`/`slate`), điểm nhấn gradient nhẹ.
- **Trang chủ**:
  - Hero đơn giản: tiêu đề site (ví dụ “Chuyên đề Slot 5”) + mô tả ngắn (lấy từ chính phần mở đầu trong file — render như nội dung, **không viết mới**). Có thể đặt trong thẻ Card, nhưng **văn bản phải là nguyên văn từ file**.
  - Grid 5 thẻ: “Minh”, “Bảo”, “Hưng”, “Vinh”, “Nhân” → dẫn tới `/minh`, `/bao`, `/hung`, `/vinh`, `/nhan` nếu có dữ liệu.
- **Trang người**:
  - Tiêu đề nav dùng tên rút gọn (“Minh”, “Bảo”, “Hưng”, “Vinh”, “Nhân”) **ngoài** khu vực bài viết (được phép vì không thuộc nội dung gốc).
  - Khu vực bài viết (`<article>`) render **toàn bộ đoạn markdown của người đó** nguyên văn.
- **Khả năng đọc**: line-height 1.75, max-width `65ch`, spacing thoáng, responsive mobile-first.
- **Không pop-up, không hiệu ứng gây nhiễu**. Có thể dùng `framer-motion` nhẹ cho card hover **nhưng không áp vào text**.

## 7) Routing & Data Fetching
- Sử dụng **App Router**:
  - `app/page.tsx`: `getCommon()` đọc phần `common` và render.
  - `app/[person]/page.tsx`: `generateStaticParams()` trả `{ person: 'minh'|'bao'|'hung'|'vinh'|'nhan' }` theo dữ liệu thực tế.
- **Static Generation** (build-time); không cần server actions.
- Build phải **fail** nếu không đọc được `content/slot5.md`.

## 8) Kiểm thử (Definition of Done)
- [ ] Trang `/` render đúng nguyên văn phần mở đầu/giới thiệu chung từ `slot5.md`. **Đối chiếu từng ký tự** (bao gồm xuống dòng).
- [ ] Trang `/minh` render đúng nguyên văn khối bắt đầu từ nhãn `Minh:` tới trước nhãn kế tiếp/hết file.
- [ ] Trang `/bao` tương tự với `Bảo :`.
- [ ] Trang `/hung` tương tự với `Hưng:`.
- [ ] Trang `/vinh` tương tự với `Vinh:`.
- [ ] Trang `/nhan` tương tự với `Nhân:`.
- [ ] Không có bất kỳ từ/câu mới nào chèn vào **trong phần nội dung**.
- [ ] UI dark theme, responsive, đẹp, dễ đọc.
- [ ] Lighthouse ≥ 90 cho Accessibility & Best Practices.
- [ ] SEO tags cơ bản hiện diện (lang="vi").

## 9) Lệnh triển khai
```bash
# Khởi tạo
npx create-next-app@latest philosophy-landing --ts --eslint --tailwind --app
cd philosophy-landing

# Cài deps markdown & UI
pnpm add react-markdown remark-gfm rehype-raw
pnpm add class-variance-authority clsx tailwind-merge
pnpm add lucide-react framer-motion
# shadcn/ui
pnpm dlx shadcn-ui@latest init -d
pnpm dlx shadcn-ui@latest add card button navigation-menu separator scroll-area

# Thêm content
mkdir -p content
# → Sao chép file markdown đã cung cấp vào: content/slot5.md (nội dung giữ nguyên 100%)

# Chạy dev
pnpm dev
```

## 10) Lưu ý tuân thủ nội dung
- **Tuyệt đối không** paraphrase, không sửa chính tả, không “làm sạch” khoảng trắng, không thay đổi dấu câu.
- Mọi xử lý chỉ phục vụ **hiển thị** (markdown → HTML), **không can thiệp vào văn bản gốc**.
- Nếu renderer tự động thêm wrapper (ví dụ `<p>`), đây là HTML-level, **không phải thay đổi nội dung**—được phép.

---

### Tóm tắt yêu cầu chức năng
1) Trang chủ `/`: hiển thị phần mở đầu/giới thiệu chung **nguyên văn** + card dẫn link tới từng người có dữ liệu.
2) Trang `/minh`, `/bao`, `/hung`, `/vinh`, `/nhan`: hiển thị **nguyên văn** phần nội dung tương ứng từ file.
3) Giao diện tối, tiếng Việt, hiện đại, dễ đọc, responsive.
4) Tuyệt đối bảo toàn nội dung 100% từ `content/slot5.md`.
