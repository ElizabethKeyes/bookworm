import { NytBook } from "./NytBook.js"

export class NytList {
  constructor(data) {
    this.listId = data.list_id
    this.listName = data.list_name
    this.displayName = data.display_name
    this.updated = data.updated
    this.books = data.books.map(b => new NytBook(b))

  }
}


// categories:
// 704 - "Combined Print & E-Book Fiction"
// 708 - "Combined Print & E-Book Nonfiction"
// 1 - "Hardcover Fiction"
// 2 = "Hardcover Nonfiction"
// 4 - "Paperback Nonfiction"
// 10 - "Series Books"
// 14 - "Young Adult Hardcover"
// 301 - "Audio Fiction"
// 302 - "Audio Nonfiction"
// 532 = "Business Books"
// 719 - "Graphic Books & Manga"