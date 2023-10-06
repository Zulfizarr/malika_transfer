import { Component } from "react";
class App extends Component{
    state = {
        players:[]
    }
    componentDidMount(){
        const players=[
            {
                PlayerPhoto:<img src="https://img.a.transfermarkt.technology/portrait/small/28003-1694590254.jpg?lm=1" title="Lionel Messi" alt="Lionel Messi" class="bilderrahmen-fixed"></img>,
                PlayerName:" Leo Messi",
                age:37,
                Nat:<img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" title="Argentina" alt="Argentina" class="flaggenrahmen"></img>,
                club:<img src="https://tmssl.akamaized.net/images/wappen/verysmall/69261.png?lm=1406739548"></img>, 
                value: 200,
            },
            {
                
                PlayerPhoto:<img src="https://img.a.transfermarkt.technology/portrait/small/8198-1694609670.jpg?lm=1" title="Cristiano Ronaldo" alt="Cristiano Ronaldo" class="bilderrahmen-fixed"></img>,
                PlayerName:"Cr Ronaldo",
                age:37,
                Nat:<img src="https://tmssl.akamaized.net/images/flagge/verysmall/136.png?lm=1520611569" title="Portugal" alt="Portugal" class="flaggenrahmen"></img>,
                club:<img src="https://tmssl.akamaized.net/images/wappen/tiny/18544.png?lm=1693570524" title="Al-Nassr FC" alt="Al-Nassr FC" class="tiny_wappen"></img>,
                value: 100,
            },
            {
                PlayerPhoto:<img src="https://img.a.transfermarkt.technology/portrait/small/342229-1682683695.jpg?lm=1" title="Kylian Mbappé" alt="Kylian Mbappé" class="bilderrahmen-fixed"></img>,
                PlayerName:"Mbappe",
                age:24,
                Nat:<img src="https://tmssl.akamaized.net/images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen"></img>,
                club:<img src="https://tmssl.akamaized.net/images/wappen/tiny/583.png?lm=1522312728" title="Paris Saint-Germain" alt="Paris Saint-Germain" class="tiny_wappen"></img>,
                value: 83,
            },
            {
                PlayerPhoto:<img src="https://img.a.transfermarkt.technology/portrait/small/148455-1546611604.jpg?lm=1" title="Mohamed Salah" alt="Mohamed Salah" class="bilderrahmen-fixed"></img>,
                PlayerName:"Mohammad Salah",
                age:33,
                Nat:<img src="https://tmssl.akamaized.net/images/flagge/verysmall/2.png?lm=1520611569" title="Egypt" alt="Egypt" class="flaggenrahmen"></img>,
                club:<img src="https://tmssl.akamaized.net/images/wappen/tiny/31.png?lm=1456567819" title="Liverpool FC" alt="Liverpool FC" class="tiny_wappen"></img>,
                value: 100,
            },
            {
                PlayerPhoto:<img src="https://img.a.transfermarkt.technology/portrait/small/68290-1692601435.jpg?lm=1" title="Neymar" alt="Neymar" class="bilderrahmen-fixed"></img>,
                PlayerName:"Neymar Jr",
                age:31,
                Nat:<img src="https://tmssl.akamaized.net/images/flagge/verysmall/26.png?lm=1520611569" title="Brazil" alt="Brazil" class="flaggenrahmen"></img>,
                club:<img src="https://tmssl.akamaized.net/images/wappen/tiny/1114.png?lm=1694169109" title="Al-Hilal SFC" alt="Al-Hilal SFC" class="tiny_wappen"></img>,
                value: 97,
            },
            {
                PlayerPhoto:<img src="https://img.a.transfermarkt.technology/portrait/small/418560-1694590614.jpg?lm=1" title="Erling Haaland" alt="Erling Haaland" class="bilderrahmen-fixed"></img>,
                PlayerName:"Haland",
                age:23,
                Nat:<img src="https://tmssl.akamaized.net/images/flagge/verysmall/125.png?lm=1520611569" title="Norway" alt="Norway" class="flaggenrahmen"></img>,
                club:<img src="https://tmssl.akamaized.net/images/wappen/verysmall/16.png?lm=1406739548"></img>,
                value: 113,
            },
            {
                PlayerPhoto:<img src="https://img.a.transfermarkt.technology/portrait/small/754037-1691187929.png?lm=1" title="Abbosbek Fayzullaev" alt="Abbosbek Fayzullaev" class="bilderrahmen-fixed"></img>,
                PlayerName:"Abbosbek Fayzullayev",
                age:20,
                club:<img src="https://tmssl.akamaized.net/images/wappen/tiny/2410.png?lm=1409222667" title="CSKA Moscow" alt="CSKA Moscow" class="tiny_wappen"></img>,
                Nat:<img src="https://tmssl.akamaized.net/images/flagge/verysmall/180.png?lm=1520611569" title="Uzbekistan" alt="Uzbekistan" class="flaggenrahmen"></img>,
                value: 76,
            },
            {
                PlayerPhoto:<img src="https://img.a.transfermarkt.technology/portrait/small/357565-1682587890.jpg?lm=1" title="Rodri" alt="Rodri" class="bilderrahmen-fixed"></img>,
                PlayerName:"Rodri",
                age:27,
                Nat:<img src="https://tmssl.akamaized.net/images/flagge/verysmall/157.png?lm=1520611569" title="Spain" alt="Spain" class="flaggenrahmen"></img>,
                club:<img src="https://tmssl.akamaized.net/images/wappen/tiny/281.png?lm=1467356331" title="Manchester City" alt="Manchester City" class="tiny_wappen"></img>,
                value: 53,
            },
            {
                PlayerPhoto:<img src="https://img.a.transfermarkt.technology/portrait/small/646740-1682685701.jpg?lm=1" title="Gavi" alt="Gavi" class="bilderrahmen-fixed"></img>,
                PlayerName:"Gavi",
                age:19,
                Nat:<img src="https://tmssl.akamaized.net/images/flagge/verysmall/157.png?lm=1520611569" title="Spain" alt="Spain" class="flaggenrahmen"></img>,
                club:<img src="https://tmssl.akamaized.net/images/wappen/tiny/131.png?lm=1406739548" title="FC Barcelona" alt="FC Barcelona" class="tiny_wappen"></img>,
                value: 102,
            },
            {
                PlayerPhoto:<img src="https://img.a.transfermarkt.technology/portrait/small/683840-1620304992.jpg?lm=1" title="Pedri" alt="Pedri" class="bilderrahmen-fixed"></img>,
                PlayerName:"Pedri",
                age:20,
                Nat:<img src="https://tmssl.akamaized.net/images/flagge/verysmall/19.png?lm=1520611569"></img>,
                club:<img src="https://tmssl.akamaized.net/images/wappen/verysmall/16.png?lm=1406739548"></img>,
                value: 67,
            },
        ];
        this.setState({
            players,
        })
    }
    removePlayer=(index)=>{
        const players=this.state.players;
        players.splice(index,1);
        this.setState({
            players,
        })
    }
    render(){
        const{players }=this.state;
        return<div className="market">
                 <div className="container text-center">
                    <h1> ⚽️TRANSFER market </h1>
                    <div className="row">
                        <div  className="col">
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>№</th>
                                        <th>PlayerPhoto</th>
                                        <th>PlayerName</th>
                                        <th>Age</th>
                                        <th>Nat</th>
                                        <th>Club</th>
                                        <th>Market value</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        players.map((item,index)=> <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.PlayerPhoto}</td>
                                            <td>{item.PlayerName}</td>
                                            <td>{item.age}</td>
                                            <td>{item.Nat}</td>
                                            <td>{item.club}</td>
                                            <td> <span className="badge bg-primary"  >
                                            💰${item.value}.00mln
                                                </span></td>
                                                <td>
                                                    <button className="btn btn-danger "onClick={()=>this.removePlayer(index)}>Remove</button>
                                                </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                 </div>
            </div>
    }
}
export default App;