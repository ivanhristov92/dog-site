import Head from 'next/head'
import Nav from "../components/navigation";
import Link from 'next/link'

const cards = [1,2,3,4,5,];

const MOCK_URL = "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Natural-Dog-Law-2-To-dogs%2C-energy-is-everything.jpg?itok=Z-ujUOUr"

export default () => (
  <div className={"container"} key={"ads"}>

    <Head>
      <title>Ads</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />

    </Head>
    <Nav />
    <div className={"row"}>

    {
      cards.map(()=>{
        return (
          <div className={"col-sm-4"}>
            <Link href="/ads/1">
              <div className="card" style={{"width": "18rem", cursor: "pointer"}}>
                <img className="card-img-top" src={MOCK_URL} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                </div>
              </div>
            </Link>
            </div>
        )
      })
    }
    </div>


  </div>
)
