/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertNumbers = (number: number, language: string) => {
    if (language === "fa") {
      return number
        .toString()
        .replace(/[0-9]/g, (digit: any) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
    }
    return number
}