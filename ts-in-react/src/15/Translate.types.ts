type Languages = "fa" | "en" | "es" | "tr";
type MessageType = "error" | "res" | "notification_es";
type Message = `${Languages}_${MessageType}`;

// clean code
export type TranslateProps = { toTranslate: Message };

// dirty code
// export type TranslateProps = {
//   toTranslate:
//     | "error_fa"
//     | "error_en"
//     | "error_es"
//     | "error_tr"
//     | "res_fa"
//     | "res_en"
//     | "res_es"
//     | "res_tr"
//     | "notification_fa"
//     | "notification_en"
//     | "notification_es"
//     | "notification_tr";
// };
