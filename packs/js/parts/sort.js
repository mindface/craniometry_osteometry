
export class CatchData {
  constructor(){
    this.fileElement = document.getElementById('file');
    this.videoElement = document.getElementById('video');
    this.stop_btn = document.getElementById('stop');
    this.canvas = document.getElementById('c');
    this.v_canvas = document.getElementById('v');
    this.v_canvas.width = 640;
    this.v_canvas.height = 360;    
    this.fileSrcData;
  }

  init(){
    var flipHorizontal = false;
    var btn = document.getElementById('move');
    const ctx = this.canvas.getContext('2d');
    this.fileElement.addEventListener('change', (e) =>{
       this.onFileChange(e);
    });
  }

  canvas(image){
    const ctx = this.canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(image,0,0);
    }
  }

  onFileChange(e){
    let fr = new FileReader();
    const fileData = e.target.files[0];
    fr.readAsDataURL(fileData)
    if(!fileData.type.match('mp4.*')){
      alert('mp4を選択してください。');
      return;
    }
    fr.onload = (evt) => {
       this.fileSrcData = evt.target.result;
       this.videoElement.src = this.fileSrcData
       this.canvasDraw()
    }
    // fr.readAsDataURL(fileData)
  }

  canvasDraw(){
    const ctx = this.canvas.getContext('2d');
    let counter = 0;
    this.canvas.width = 640;
    this.canvas.height = 360;
    ctx.clearRect(0,0,this.videoElement.width,this.videoElement.height);
    const image = new Image();
    const timer = setInterval( () => {
      this.videoElement = document.getElementById('video');
      let canvas = document.getElementById('c');
      image.src = canvas.toDataURL();
      ctx.drawImage(this.videoElement,0,0,this.videoElement.width,this.videoElement.height);
       posenet.load().then(function(net) {
        const pose = net.estimateSinglePose(image, {
          flipHorizontal: true
        });
        return pose;
      }).then( (pose) =>{
        // console.log(pose);
        this.viewCanvas(pose,counter)
        counter ++;
      })
    }, 1000);
    this.stop_btn.addEventListener('click', () => {
      clearInterval(timer);
    });
  //   image.src = this.fileSrcData;
  //   image.onload = function(){
  //      ctx.drawImage(this.videoElement,0,0,this.videoElement.width,this.videoElement.height);

  //   }
  }

  viewCanvas(data,counter){
    const viewBox = this.v_canvas
    const ctx = viewBox.getContext('2d');
    ctx.clearRect(0,0,this.v_canvas.width,this.v_canvas.height);
    let x = 0;
    let y = 0;
    let mx = 0;
    let my = 0;    
    const keypoints = data.keypoints
    this.drawSkeleton(keypoints,0.6,ctx)
    for (let index = 0; index < keypoints.length; index++) {
      const key_pos = keypoints[index].position
        x = this.v_canvas.width - Math.floor(key_pos.x);
        y = Math.floor(key_pos.y);
          // ctx.beginPath();
          // ctx.moveTo(mx,my);
          // ctx.lineWidth = 2;
          // ctx.strokeStyle = 'orange';
          // ctx.lineTo(x,y);
          // ctx.stroke();
          // ctx.closePath();
        
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,0.6)'
        ctx.arc(x, y, 5, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        mx = x;
        my = y; 
    }
  }

  drawSkeleton(keypoints, minConfid,ctx,scale = 1){
    const adjacentKeyPoints = posenet.getAdjacentKeyPoints(keypoints,minConfid);

    adjacentKeyPoints.forEach( key => {
      this.drawSegment(
        this.toTuple(key[0].position),
        this.toTuple(key[1].position),
        'rgba(255,255,255,0.6)',
        scale,
        ctx
      )
    });
  }

  toTuple({ y, x }){
    const r_x = this.videoElement.width - x;
    const r_h = this.videoElement.height 

    return[y,r_x];
  }

  drawSegment([ay,ax],[by,bx],color,scale,ctx){
    ctx.beginPath();
    ctx.moveTo(ax*scale,ay*scale);
    ctx.lineTo(bx*scale,by*scale);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'orange';
    ctx.stroke();
    ctx.closePath();
  }

}
