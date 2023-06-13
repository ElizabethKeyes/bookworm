export class NytBook {
  constructor(data) {
    this.ageGroup = data.age_group
    this.author = data.author
    this.contributor = data.contributor
    this.description = data.description
    this.price = data.price
    this.publisher = data.publisher
    this.buyLinks = data.buy_links
    this.title = data.title
    this.weeksOnList = data.week_on_list
    this.rankLastWeek = data.rank_last_week
    this.bookImage = data.book_image
  }
}