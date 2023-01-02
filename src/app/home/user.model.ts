export interface IUser{
    "id": number,
    "name": string,
    "email": string,
    "address": {
      "city": string,
      "zipcode": string
    },
    "phone": string,
    "website": string,
    "img"?: string
}