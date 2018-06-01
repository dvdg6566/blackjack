import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CModal } from './components/Modal.js'
import { Buttons } from './components/buttons.js'
import { CardPanel } from './components/CardPanel.js'
import { EndGame } from './components/EndGame.js'
import { Player } from './components/player.js'
import { Dealer } from './components/Dealer.js'
import { Middle } from './components/Middle.js'
import { shuffle } from  'underscore'
console.disableYellowBox = 1

export default class App extends React.Component {

  /*
  Initialisation of state to default arrangement
  Cardlist: List of cards. Originally shuffled with 10 decks stacked on top of each other (no interaction between decks)
  Bustscore: Custom bustscore from player
  modalOpen: True at the start of the game to initialise "./componenets/modal.js"
  Player and dealer arrays store cards of player and dealer
  gameover controls opening of "./componenets/endGame.js" 
  player tot and dealer tot are the total of the player and dealer respectively taking all aces as 11
  player dbl and dealer low are the total of the player and dealer respectively taking 1 ace as 1 and any others as 11.
  player dbl and dealer dbl are the total of the player and dealer respectively taking 2 aces as 1
  We assume players CANNOT DRAW 3 ACES
  status: Status shown in the middle
  gamecnt: ensure no setTimeout errors occur betweeen games.
  earlycall: initiate early updates while delaying "./componenets/endGame.js"
  */

  state = {
    cardlist:[],
    bustScore:0,
    modalOpen:true,
    player:[],
    dealer:[],
    gameover:false,
    playertot:0,
    playerlow:0,
    playerdbl:0,
    dealertot:0,
    dealerlow:0,
    dealerdbl:0,
    status:'',
    gamecnt:0,
    earlycall:false,
  }

  newGame = () => {
    this.setState({
      modalOpen:true,
      player:[],
      dealer:[],
      playertot:0,
      dealertot:0,
      gameover:false,
      playerlow:0,
      playerdbl:0,
      earlycall:false,
      dealerdbl:0,
      gamecnt:0,
    })
  }

  endgame = () => {
      this.setState({
        player:[],
        dealer:[],
        playertot:0,
        dealertot:0,
        gameover:false,
        playerlow:0,
        playerdbl:0,
        dealerdbl:0,
        earlycall:false,
        gamecnt:this.state.gamecnt+1,
        status:"                                Game Started                                    "
      })
      setTimeout(() => {this.startGame()},10);
  }




//_______________________________________________________________________________________________________
//Restocking of cards




  shuffle = () => {
    let cd = []
    for (let i = 0; i <= 10; ++i){
      let a = []
      for (let i = 1; i <= 52; ++i){
        a.push(i)
      }
      a = shuffle(a)
      // a is a random shuffled deck. 
      // cd stores a stack of decks that DO NOT HAVE ANY INTERACTION
      cd = cd.concat(a)
    }
    this.setState({
      cardlist:cd
    })
  }



//_______________________________________________________________________________________________________




  cnv = (x) => {
    // x is the card ID. 
    // converts to value: 11 if ace or normal value for other cards.
    x = x%13
    if (x === 0){return 10}
    else if (x === 1){return 11}
    else if (x <= 10){return x}
    return 10
  }

  update = (e) =>{
    this.setState({
      bustScore:e,
      modalOpen:false,
      status:'                                  Your Turn                                    '
    })
    this.startGame()
  }


//_______________________________________________________________________________________________________
//Dealer Drawing



  DealerOnly = () => {
    let t = this.state.gamecnt
    for (let i = 1; i < 5; ++i){
      // We claim the dealer can have at most 4+2=6 cards. 
      setTimeout(() => {
        if (t === this.state.gamecnt && this.state.earlycall === false){
          // else the game is already over
          if (this.state.dealertot >= this.state.playertot && this.state.dealertot >= this.state.bustScore-5){
            // Dealer has already won
            this.setState({
              earlycall:true,
            })
            setTimeout(() => {
              this.setState({
                gameover:true,
              })
            },400)
          }
          else {
            a = this.state.cardlist
            let cur = a[a.length-1]
            a.pop()
            if (a.length === 0){this.shuffle()} 
            setTimeout (() => {
              let tot = this.cnv(cur) + this.state.dealertot
              this.setState({
                status:'                                  Dealer Draw                                    ',
                dealer:this.state.dealer.concat([cur])
              })

              setTimeout( () => {
                if (tot === this.state.bustScore){
                  // Dealer blackjacks and wins
                  this.setState({
                    earlycall:true,
                    dealertot:tot,
                  })
                  setTimeout(() => {
                    this.setState({
                      gameover:true,
                    })
                  },400)
                }
                else if (tot > this.state.bustScore){
                  // Dealer busts but could have aces
                  setTimeout(() => {
                    this.setState({
                      earlycall:true
                    })
                    setTimeout( () => {
                      this.setState({
                        gameover:true,
                      })
                    },400)
                    if (this.state.dealertot === this.state.dealerlow){
                      // No aces
                      this.setState({dealertot:this.state.dealerlow})
                    }
                    else{
                      this.setState({dealertot:-1})
                    }
                  },20)
                }
                else {
                  // Normal drawn card
                  this.setState({
                    dealertot:tot,
                    dealerlow:tot,
                  })
                  setTimeout( () => {
                    // If ace we set dealerlow
                    if (this.cnv(a) === 11){
                      this.setState({
                        dealerlow:tot-10
                      })
                    }
                  },10)
                }
              },20)
            },10)
          }
        }
      },400*i)
    }
  }


//_______________________________________________________________________________________________________
//Playerdraw



  Playerdraw = () => {
    setTimeout(() => {
      if (this.state.earlycall === true){return}
      a = this.state.cardlist
      let cur = a[a.length-1]
      a.pop()
      this.state.player.push(cur)
      let tot = this.state.playertot+this.cnv(cur)
      let x = this.cnv(cur)
      if (x === 11 && this.state.playerlow == this.state.playertot){
        // means that no aces have been draw before this. 
        this.setState({
          playertot:this.state.playertot+11,
          playerlow:this.state.playerlow+1,
          playerdbl:this.state.playerdbl+1
        })
      }
      else if (x === 11 && this.state.playerdbl == this.state.low){
        // 1 ace has been draw so far. 
        this.setState({
          playertot:this.state.playertot+11,
          playerlow:this.state.playerlow+11,
          playerdbl:this.state.playerdbl+1,
        })
      }
      else {
        // This card is not an ace
        this.setState({
          playerlow:this.state.playerlow+x,
          playerdbl:this.state.playerdbl+x,
          playertot:this.state.playertot+x
        })
      }
      setTimeout(() => {
        if (tot === this.state.bustScore){
          // Player blackjacked
          this.setState({
            status:'                                 Player Blackjack                                   ',
            earlycall:true,
          })
          setTimeout(() => {
            this.setState({
              gameover:true,
            })
          },400)
        }

        else if (tot > this.state.bustScore){
          if (this.state.playertot === this.state.playerlow){
            // Player busted as no aces have been drawn
            this.setState({
              status:'                                 Player Busted                                   ',
              earlycall:true,
              playertot:-1,
            })
            setTimeout(() => {
              this.setState({
                gameover:true,
              })
            },400)
          }else{
            // Player has drawn at least one ace
            this.setState({
              playertot:this.state.playerlow,
              playerlow:this.state.playerdbl,
            })
            tot = tot - 10
            // Use aces as 1 cuz cannot have 11. 
            setTimeout(() => {
              if (tot === this.state.bustScore){
                // Blackjack!
                this.setState({
                  status:'                                 Player Blackjack                                   ',
                  earlycall:true,
                })
                setTimeout(() => {
                  this.setState({
                    gameover:true,
                  })
                },400)
              }else if (this.state.playertot > this.state.bustScore){
                if (tot === this.state.bustScore){
                  // Player blackjack
                  this.setState({
                    status:'                                 Player Blackjack                                   ',
                    earlycall:true,
                  })
                  setTimeout(() => {
                    this.setState({
                      gameover:true,
                    })
                  },400)
                }
                else if (this.state.playertot > this.state.bustScore){
                  // Player still busted
                  if(this.state.playertot === this.state.playerlow){
                    // Then the player has no more aces. Bust
                    this.setState({
                      status:'                                 Player Busted                                   ',
                      playertot:-1,
                    })
                    setTimeout(() => {
                      this.setState({
                        gameover:true,
                      })
                    },400)
                  }else{
                    // Player has drawn 2 aces
                    this.setState({playertot:this.state.playerlow})
                    tot = tot-10
                    setTimeout( () => {
                      if (this.state.playertot === this.state.bustScore){
                        this.setState({
                          status:'                                 Player Blackjack                                   ',
                        })
                        setTimeout(() => {
                          this.setState({
                            gameover:true,
                          })
                        },400)
                      }else if (this.state.playertot > this.state.bustScore){
                        this.setState({
                          status:'                                 Player Busted                                   ',
                          earlycall:true,
                          playertot:-1,
                        })
                        setTimeout(() => {
                          this.setState({
                            gameover:true,
                          })
                        },400)
                      }
                    },10)
                  }
                }
              }
            },10)
          }
        }
      },10)
    },200)
  }




//_______________________________________________________________________________________________________
//game initialiser




  startGame = () => {
    let a = this.state.cardlist,c
    for (let i = 1; i < 5; ++i){
      setTimeout(() => { 
        c = a.pop()
        if (i%2===1){
          this.setState({
            dealer:this.state.dealer.concat([c]),
            dealertot:this.state.dealertot+this.cnv(c),
            dealerlow:this.state.dealerlow+this.cnv(c),
            dealerdbl:this.state.dealerdbl+this.cnv(c)
          })
          setTimeout( () => {
            if (this.cnv(c) === 11){
              if (this.state.dealertot === this.state.dealerlow){
                this.setState({
                  dealerlow:this.state.dealerlow-10,
                  dealerdbl:this.state.dealerdbl-10,
                })
              }else{
                this.setState({
                  dealerdbl:this.state.dealerdbl-10,
                })
              }
            }
          },10)
        }else{
          this.setState({
            player:this.state.player.concat([c]),
            playertot:this.state.playertot+this.cnv(c),
            playerlow:this.state.playerlow+this.cnv(c),
            playerdbl:this.state.playerdbl+this.cnv(c)
          })
          if (this.cnv(c) === 11){
            if (this.state.playertot === this.state.playerlow){
              this.setState({
                playerlow:this.state.playerlow-10,
                playerdbl:this.state.playerdbl-10,
              })
            }else{
              this.setState({
                playerdbl:this.state.playerdbl-10,
              })
            }
          }
        }
      },500*i)
    }

    setTimeout(() => {
      this.state.cardlist = a
      if (this.state.dealertot === this.state.bustScore && this.state.playertot === this.state.bustScore){
        // Both player and dealer blackjacked. Draw. 
        this.setState({
          status:'                  Player and Dealer Blackjack                                    ',
          earlycall:true,
        })
        setTimeout(() => {
          this.setState({
            gameover:true,
          })
          return
        },400)
      }
      else if (this.state.dealertot === this.state.bustScore){
        // Only dealer blackjacked. Player loses.
        this.setState({
          status:'                                  Dealer Blackjack                                    ',
          earlycall:true,
        })
        setTimeout(() => {
          this.setState({
            gameover:true,
          })
          return
        },400)
      }
      else if (this.state.playertot === this.state.bustScore){
        // Only player blackjacked. Player wins.
        this.setState({
          status:'                                  Player Blackjack                                    ',
          earlycall:true,
        })
        setTimeout(() => {
          this.setState({
            gameover:true,
          })
          return
        },400)
      } 
    },2010)
  }

  


//_______________________________________________________________________________________________________
//App Rendering



  componentDidMount = () => {
    this.shuffle()
  }

  render(){
    return (
      <View style={styles.container}>
        <CModal
          state={this.state.modalOpen}
          update={this.update}
        ></CModal>
        <EndGame
          state={this.state.gameover}
          update={this.endgame}
          player={this.state.playertot}
          dealer={this.state.dealertot}
          bust={this.state.bustScore}
          restart={this.newGame}
          bs={this.state.bustScore}
        ></EndGame>
        <View style={{flex:2}} />
        <Dealer />
        <View style={{flex:6}} />
        <CardPanel 
          arr={this.state.dealer}
          dlr={1}
          gvr={this.state.earlycall}
        />
        <Middle
          text={this.state.status}
        />
        <CardPanel 
          arr={this.state.player}
          dlr={0}
          gvr={this.state.earlycall}
        />
        <Text style={{flex:5}} />
        <Player />
        <Text style={{flex:6}} />
        <Buttons
          draw={this.Playerdraw}
          fold={this.DealerOnly}
        ></Buttons>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007400',
    alignItems: 'center',
    justifyContent: 'center',
  },
});