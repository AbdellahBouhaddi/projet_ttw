import React,{Component} from "react"


class AnimalList extends Component{

    state={
        my_likes:this.props.Animaux1.liked
    }
    
    LikeFunction=()=>{
        this.setState({
            my_likes:!this.state.my_likes
        })
    }


    render(){
        return(
            <div className="AL">
              
              <div className="col" style={{paddingLeft:"20%"}}>
                <div className="card" style={{width: "18rem" }}>
                    <img src={this.props.Animaux1.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{this.props.Animaux1.nom}</h5>
                        <h6> Age: {this.props.Animaux1.age }   espece : {this.props.Animaux1.espece }</h6>
                        <p className="card-text">{this.props.Animaux1.descr}</p>
                        <a  className={this.state.my_likes?"btn btn-primary":"btn btn-secondary" }onClick={()=>this.LikeFunction()}  style={{float:"right"}}>  <h7>{this.state.my_likes?"Like":"Like"}</h7> </a>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}
export default AnimalList;