import Nav from "../../components/navigation"

const MOCK_URL = "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Natural-Dog-Law-2-To-dogs%2C-energy-is-everything.jpg?itok=Z-ujUOUr"

export default () => <div className={"container"}>
  <Nav />
  <img src={MOCK_URL}/>
</div>
