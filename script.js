// =========================
// THREE JS 3D BACKGROUND
// =========================

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});

renderer.setSize(
  window.innerWidth,
  window.innerHeight
);

renderer.setPixelRatio(
  window.devicePixelRatio
);

document.body.appendChild(
  renderer.domElement
);

// =========================
// 3D OBJECT
// =========================

const geometry =
new THREE.TorusKnotGeometry(
  10,
  3,
  100,
  16
);

const material =
new THREE.MeshStandardMaterial({

  color: 0xb967ff,

  wireframe: true

});

const torus =
new THREE.Mesh(
  geometry,
  material
);

scene.add(torus);

// =========================
// LIGHTS
// =========================

// MAIN LIGHT

const pointLight =
new THREE.PointLight(
  0xffffff,
  2
);

pointLight.position.set(
  20,
  20,
  20
);

scene.add(pointLight);

// SOFT AMBIENT LIGHT

const ambientLight =
new THREE.AmbientLight(
  0xffffff,
  0.5
);

scene.add(ambientLight);

// =========================
// CAMERA POSITION
// =========================

camera.position.z = 35;

// =========================
// PARTICLES
// =========================

const particlesGeometry =
new THREE.BufferGeometry();

const particlesCount = 500;

const posArray =
new Float32Array(
  particlesCount * 3
);

for(let i = 0; i < particlesCount * 3; i++){

  posArray[i] =
  (Math.random() - 0.5) * 100;

}

particlesGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(
    posArray,
    3
  )
);

const particlesMaterial =
new THREE.PointsMaterial({

  size: 0.08,

  color: 0xffffff

});

const particlesMesh =
new THREE.Points(
  particlesGeometry,
  particlesMaterial
);

scene.add(particlesMesh);

// =========================
// MOUSE EFFECT
// =========================

let mouseX = 0;
let mouseY = 0;

document.addEventListener(
  'mousemove',
  (event)=>{

    mouseX =
    event.clientX /
    window.innerWidth - 0.5;

    mouseY =
    event.clientY /
    window.innerHeight - 0.5;

  }
);

// =========================
// ANIMATION LOOP
// =========================

function animate(){

  requestAnimationFrame(
    animate
  );

  // ROTATE OBJECT

  torus.rotation.x += 0.003;

  torus.rotation.y += 0.005;

  // PARTICLE ROTATION

  particlesMesh.rotation.y += 0.0005;

  // MOUSE MOVEMENT

  torus.rotation.x += mouseY * 0.001;

  torus.rotation.y += mouseX * 0.001;

  // RENDER

  renderer.render(
    scene,
    camera
  );

}

animate();

// =========================
// RESPONSIVE
// =========================

window.addEventListener(
  'resize',
  ()=>{

    camera.aspect =
    window.innerWidth /
    window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

  }
);

// =========================
// GSAP ANIMATIONS
// =========================

// HERO TEXT

gsap.from(
  ".hero-text",
  {
    opacity: 0,
    y: 80,
    duration: 1.5,
    ease: "power3.out"
  }
);

// HERO IMAGE

gsap.from(
  ".hero-image",
  {
    opacity: 0,
    x: 80,
    duration: 1.5,
    ease: "power3.out"
  }
);

// SECTION TITLES

gsap.from(
  ".section-title",
  {
    scrollTrigger: ".section-title",

    opacity: 0,

    y: 50,

    duration: 1
  }
);

// =========================
// VANILLA TILT
// =========================

VanillaTilt.init(
  document.querySelectorAll(
    "[data-tilt]"
  ),

  {

    max: 15,

    speed: 400,

    glare: true,

    "max-glare": 0.3

  }
);

// =========================
// SMOOTH NAVBAR SHADOW
// =========================

window.addEventListener(
  'scroll',
  ()=>{

    const header =
    document.querySelector(
      'header'
    );

    if(window.scrollY > 50){

      header.style.background =
      "rgba(0,0,0,0.5)";

      header.style.boxShadow =
      "0 5px 20px rgba(0,0,0,0.3)";

    }

    else{

      header.style.background =
      "rgba(255,255,255,0.05)";

      header.style.boxShadow =
      "none";

    }

  }
);

// =========================
// BUTTON GLOW EFFECT
// =========================

const buttons =
document.querySelectorAll(
  '.btn'
);

buttons.forEach(
  button=>{

    button.addEventListener(
      'mousemove',
      e=>{

        const x =
        e.pageX -
        button.offsetLeft;

        const y =
        e.pageY -
        button.offsetTop;

        button.style.setProperty(
          '--x',
          x + 'px'
        );

        button.style.setProperty(
          '--y',
          y + 'px'
        );

      }
    );

  }
);

// =========================
// PARALLAX EFFECT
// =========================

window.addEventListener(
  'scroll',
  ()=>{

    const scrollY =
    window.scrollY;

    document.querySelector(
      '.hero-image'
    ).style.transform =

    `translateY(${scrollY * 0.05}px)`;

  }
);

// =========================
// LOADING EFFECT
// =========================

window.addEventListener(
  'load',
  ()=>{

    document.body.style.opacity = 1;

  }
);