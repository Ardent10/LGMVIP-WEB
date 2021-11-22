import React from "react";

function UserCards({users}){


            return (<div >
                <h1>USERS</h1>
                <iframe src="https://giphy.com/embed/E489MUAY7yk4bAiIF2" title="giphy" width="100" height="100" frameBorder="0" className="giphy-embed"></iframe>
                <p><a href="https://giphy.com/stickers/dalgona-squidgame-suyopark-E489MUAY7yk4bAiIF2"></a></p>
                <div className="container-fluid mt-5">
                    <div className="row text-center">
                        {
                            users.map((currentUser)=>{
                                    const {id, email, first_name,last_name, avatar} = currentUser;
                                return(
                                  <div className="col-10 col-md-4 mt-5" key={id}>
                                    <div className="card p-2 cards">
                                     <div className="d-flex align-items-center"> 
                                        <div className="img"><img src={avatar} alt="img" className="avatar rounded" width="155" /></div>
                                        </div>
                                        <div className="ml-3 w-100">
                                            <h3 className="mb-0 mt-0 textLeft bg-info">{first_name} {last_name}</h3><span className="textLeft">{email}</span>
                                        </div>
                                    </div>
                                  </div>)
                                })
                        }
                    </div>
                </div>
            </div>) 

}

export default UserCards;