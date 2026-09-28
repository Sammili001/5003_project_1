const scenes=[
 {image:'assets/mountain-path-morning.png',alt:'A wooden path leading through a misty mountain landscape on the carriage screen',caption:'The road disappears into the mountains, and the morning follows.',status:'Morning mountain landscape revealed.',light:'morning',notes:[262,330,392]},
 {image:'assets/town-sunset.png',alt:'An old town under a warm sunset on the carriage screen',caption:'The last light settles softly on the streets we pass.',status:'Sunset landscape revealed.',light:'sunset',notes:[220,262,330]},
 {image:'assets/grassland-night.png',alt:'Moonlit grassland on the carriage screen',caption:'Under the endless sky, there is nowhere else to be.',status:'Night landscape revealed.',light:'night',notes:[196,233,294]}
];
const carriage=document.querySelector('#carriage'),win=document.querySelector('#window'),image=document.querySelector('#landscape'),caption=document.querySelector('#caption'),introCaption=document.querySelector('#intro-caption'),curtain=document.querySelector('#curtain'),status=document.querySelector('#status'),dots=[...document.querySelectorAll('.dots i')],trainButton=document.querySelector('#train-sound'),trainVolume=document.querySelector('#train-volume'),trainAudio=document.querySelector('#train-audio'),lightButton=document.querySelector('#carriage-light');
let index=2,open=false,busy=false,ctx,trainEnabled=true,lightsOn=true;
trainAudio.volume=.25;
function ensureAudio(){ctx??=new AudioContext();return ctx.resume()}
function stopTrain(){trainAudio.pause()}
function startTrain(){if(!trainEnabled)return;trainAudio.play().catch(()=>{})}
function unlockTrainAudio(){if(trainEnabled)startTrain()}
function playPiano(){if(!ctx||ctx.state!=='running')return;const now=ctx.currentTime;scenes[index].notes.forEach((freq,i)=>{const gain=ctx.createGain(),osc=ctx.createOscillator();osc.type='sine';gain.gain.setValueAtTime(.0001,now+i*.16);gain.gain.exponentialRampToValueAtTime(.063,now+i*.16+.035);gain.gain.exponentialRampToValueAtTime(.0001,now+i*.16+1.7);osc.frequency.value=freq;osc.connect(gain).connect(ctx.destination);osc.start(now+i*.16);osc.stop(now+i*.16+1.8)})}
function setCarriageScene(light=''){carriage.className=['carriage',light,!lightsOn&&'lights-off'].filter(Boolean).join(' ')}
function advanceScene(){index=(index+1)%scenes.length;const scene=scenes[index];image.src=scene.image;image.alt=scene.alt;caption.textContent=scene.caption;setCarriageScene(scene.light);dots.forEach((dot,i)=>dot.classList.toggle('active',i===index));document.querySelector('.dots').setAttribute('aria-label',`Scene ${index+1} of 3`)}
function revealNextScene(){introCaption.classList.remove('visible');advanceScene();requestAnimationFrame(()=>{open=true;curtain.classList.add('open');caption.classList.add('visible');status.textContent=scenes[index].status})}
function closeCurtain(){open=false;curtain.classList.remove('open');caption.classList.remove('visible');setCarriageScene();status.textContent='Curtain closed. This scene is waiting behind it.'}
curtain.addEventListener('click',()=>{if(busy)return;busy=true;if(!open)startTrain();ensureAudio().then(playPiano).catch(()=>{});if(open)closeCurtain();else revealNextScene();setTimeout(()=>busy=false,1600)});
trainButton.addEventListener('click',()=>{trainEnabled=!trainEnabled;trainButton.setAttribute('aria-pressed',String(trainEnabled));trainButton.textContent=trainEnabled?'train sound on':'train sound off';if(trainEnabled)startTrain();else stopTrain()});
lightButton.addEventListener('click',()=>{lightsOn=!lightsOn;lightButton.setAttribute('aria-pressed',String(lightsOn));lightButton.setAttribute('aria-label',lightsOn?'Carriage lights on':'Carriage lights off');lightButton.title=lightsOn?'Carriage lights on':'Carriage lights off';setCarriageScene(open?scenes[index].light:'')});
trainVolume.addEventListener('input',()=>{trainAudio.volume=Number(trainVolume.value)/200});
document.addEventListener('pointerdown',unlockTrainAudio,{once:true,capture:true});
document.addEventListener('keydown',unlockTrainAudio,{once:true,capture:true});
window.addEventListener('load',()=>{startTrain();requestAnimationFrame(()=>{introCaption.classList.add('visible')})});
