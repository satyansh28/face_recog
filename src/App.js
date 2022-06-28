import './App.css';
import {Imageinput} from './components/Imageinput'
import {Logo} from './components/Logo'
import { Navigation } from './components/Navigation';
import {Rank} from './components/Rank';
import Particles from "react-tsparticles";
import React from 'react';

import FaceRec from './components/FaceRec';
import Signin from './components/Signin';
import Register from './components/Register';

const p={
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#000000"
    },
    "image": "",
    "position": "",
    "repeat": "",
    "size": "",
    "opacity": 0
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 0
    },
    "enable": false
  },
  "fullScreen": {
    "enable": true,
    "zIndex": -1
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 30,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": [],
        "type": "circle"
      },
      "onHover": {
        "enable": true,
        "mode": "repulse",
        "parallax": {
          "enable": false,
          "force": 1,
          "smooth": 5
        }
      },
      "resize": true
    },
    "modes": {
      
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 200,
        "duration": 0.6,
        "mix": false
      },
      "connect": {
        "distance": 30,
        "links": {
          "opacity": 1
        },
        "radius": 30
      },
      "grab": {
        "distance": 100,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#000000"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 500
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 0
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 2
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 15,
        "easing": "ease-out-quad"
      },
      "slow": {
        "factor": 3,
        "radius": 100
      },
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      }
    }
  },
  "manualParticles": [],
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  },
  "particles": {
    "bounce": {
      "horizontal": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      },
      "vertical": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      }
    },
    "collisions": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "enable": false,
      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#ff0000",
      "animation": {
        "h": {
          "count": 0,
          "enable": true,
          "offset": 0,
          "speed": 100,
          "sync": true
        },
        "s": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "sync": true
        },
        "l": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "sync": true
        }
      }
    },
    "destroy": {
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 3
        },
        "rate": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true
      }
    },
    "gradient": [],
    "groups": {},
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#000000"
      },
      "consent": false,
      "distance": 100,
      "enable": true,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#00ff00"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },
      "decay": 0,
      "distance": {},
      "direction": "none",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 0,
        "enable": false,
        "inverse": false,
        "maxSpeed": 20
      },
      "path": {
        "clamp": true,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": false,
      "size": false,
      "speed": 3,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fillColor": {
          "value": "#000000"
        }
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": true,
        "area": 400,
        "factor": 500
      },
      "limit": 0,
      "value": 80
    },
    "opacity": {
      "random": {
        "enable": false,
        "minimumValue": 0.1
      },
      "value": 0.5,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "sync": false,
        "destroy": "none",
        "startValue": "random"
      }
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 45
      },
      "width": 1
    },
    "reduceDuplicates": false,
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 15
    },
    "rotate": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "options": {},
      "type": "circle"
    },
    "size": {
      "random": {
        "enable": false,
        "minimumValue": 1
      },
      "value": {
        "min": 0.1,
        "max": 3
      },
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 5,
        "sync": false,
        "destroy": "none",
        "startValue": "random"
      }
    },
    "stroke": {
      "width": 0
    },
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": 25
    },
    "zIndex": {
      "random": {
        "enable": false,
        "minimumValue": -1
      },
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    }
  },
  "pauseOnBlur": false,
  "pauseOnOutsideViewport": false,
  "responsive": [],
  "themes": [],
  "zLayers": 1
};
const nullstate={
  inputlink:'',
  box:{},
  route:'signin',
  id:'',
  entries:'',
  name:'',
}; 
class  App extends React.Component 
{
  constructor()
  {
    super();
    this.state={
      inputlink:'',
      box:{},
      route:'signin',
      id:'',
      entries:'',
      name:'',
    }; 
    this.temp={tempinput: ''};
    this.status=0;
  }
  whereface=(data)=>
  {
    const image = document.getElementById('inpimag');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(height);
    return {
      leftCol: data.left_col * width,
      topRow: data.top_row * height,
      rightCol: width * (1-data.right_col ),
      bottomRow: height * (1-data.bottom_row )
    }
  }
  
  componentDidCatch()
  {
    return(<h1>Could not load page!</h1>)
  }
  getsinput=(event) =>
  {
    this.temp.tempinput=event.target.value;
  }
  clicked=(event)=>
  {
    this.status=1;
    this.setState({...this.state,inputlink:this.temp.tempinput,box:{}});
    fetch('https://rocky-oasis-10907.herokuapp.com/imglink',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({link:this.temp.tempinput,id:this.state.id})
    }).then(resp=> {
      if(resp.status===200)
      {
        return(resp.json().then(res=>{
        this.status=1;
        this.setState({...this.state,entries:res.entries});
        this.render();
        return res;}))
      }
      else
      {
        this.status=2;
        this.setState({...this.state,inputlink: "00",box:{}});
        throw Error('err');
      }
  })
  .then(res=>
    {
      
      let absolutebox=this.whereface(res.box);
      console.log(absolutebox);
      this.setState({...this.state,box:absolutebox});
    })
    .catch(err=>{console.log(err)});
  }
  setRoute=(curr,userid='',uname='',uentries='')=> 
  {
    if(curr==='signin')
    {
      this.temp={tempinput: ''};
      this.status=0;
      this.setState(nullstate);
    }
    else
      this.setState({...this.state,route: curr,id:userid,entries: uentries,name: uname});
  }
  render()
  {
    return (
      <div className="App">
      
      <Particles params={p} />
      
      {this.state.route==='signin'?
      <Signin onLogin={this.setRoute}/>:
        (this.state.route==='home'?<div>
      <Navigation signout={this.setRoute}/>
      <Logo />
      <Rank uname={this.state.name} uentries={this.state.entries}/>
      <Imageinput inputs={this.getsinput} clicked={this.clicked}/>
      <FaceRec box={this.state.box} imglink={this.state.inputlink} status={this.status}/>
      </div>:<Register click={this.setRoute}/>)}
      </div>
    );
  }
}

export default App;
