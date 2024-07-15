import toast from "react-hot-toast";

export async function copyToClipboard(value: string) {
  if (value) {
    await navigator.clipboard.writeText(value);
    toast.success("متن شما با موفقیت کپی شد.");
  }
}
