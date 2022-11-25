export const keyFeatures = ['cpu', 'ram', 'os', 'battery', ['primaryCamera', 'secondaryCmera'], 'dimentions', 'weight', 'displayResolution']


export const featureCategories = [
  {
    label: 'Screen',
    content: ['displayResolution', 'displaySize', 'displayType']
  }, 
  {
    label: 'Cameras',
    content: ['primaryCamera', 'secondaryCmera']
  }, 
  {
    label: 'Operating System',
    content: ['os']
  }, 
  {
    label: 'Battery',
    content: ['battery']
  }, 
  {
    label: 'Memory & Storage',
    content: ['internalMemory', 'externalMemory']
  }, 
  {
    label: 'Connecting Ports',
    content: ['usb']
  }, 
  {
    label: 'Processor',
    content: ['cpu', 'ram', 'chipset', 'gpu']
  }, 
  {
    label: 'Sensors',
    content: ['sensors']
  }, 
  {
    label: 'Network',
    content: ['networkTechnology', 'networkSpeed', 'sim']
  }, 
  {
    label: 'Connectivity',
    content: ['gprs', 'edge', 'gps', 'wlan', 'bluetooth', 'nfc']
  }, 
]

export const features = {
  displayResolution: {
    label: 'Resolution', icon: { iconName:'faSquare', prefix:'' },
  },
  displaySize: {
    label: 'Size', icon: { iconName:'', prefix:'' },
  },
  displayType: {
    label: 'Type', icon: { iconName:'', prefix:'' },
  },
  primaryCamera: {
    label: 'Main', icon: { iconName:'faCameraRetro', prefix:'' }, splitter: ' with ', cat: 'Cameras'
  },
  secondaryCmera: {
    label: 'Selfie', icon: { iconName:'faCameraRetro', prefix:'' }, splitter: ' with '
  },
  internalMemory: {
    label: 'Internal Memory', icon: { iconName:'', prefix:'' }, splitter: ' / '
  },
  externalMemory: {
    label: 'External Memory', icon: { iconName:'', prefix:'' },
  },
  ram: {
    label: 'RAM', icon: { iconName:'faMemory', prefix:'' },
  },
  cpu: {
    label: 'Processor', icon: { iconName:'faMicrochip', prefix:'' },
  },
  chipset: {
    label: 'Chipset', icon: { iconName:'', prefix:'' },
  },
  gpu: {
    label: 'GPU', icon: { iconName:'', prefix:'' },
  },
  os: {
    label: 'Operating System', icon: { iconName:'faMobile', prefix:'' },
  },
  battery: {
    label: 'Battery', icon:  { iconName:'faBatteryThreeQuarters', prefix:'' },
  },
  usb: {
    label: 'USB', icon: { iconName:'', prefix:'' },
  },
  sensors: {
    label: 'Sensors', icon: { iconName:'', prefix:'' }, splitter: ' & '
  },
  networkTechnology: {
    label: 'Technology', icon: { iconName:'', prefix:'' },
  },
  networkSpeed: {
    label: 'Speed', icon: { iconName:'', prefix:'' },
  },
  sim: {
    label: 'SIM', icon: { iconName:'', prefix:'' },
  },
  gprs: {
    label: 'GPRS', icon: { iconName:'', prefix:'' },
  },
  edge: {
    label: 'EDGE', icon: { iconName:'', prefix:'' },
  },
  gps: {
    label: 'GPS', icon: { iconName:'', prefix:'' },
  },
  wlan: {
    label: 'WLAN', icon: { iconName:'', prefix:'' },
  },
  bluetooth: {
    label: 'Bluetooth', icon: { iconName:'', prefix:'' },
  },
  nfc: {
    label: 'NFC', icon: { iconName:'', prefix:'' },
  },
  dimentions: {
    label: 'Dimensions', icon: { iconName:'faUpRightAndDownLeftFromCenter', prefix:'' }, 
  },
  weight: {
    label: 'Weight', icon: { iconName:'faWeightHanging', prefix:'' }, units: 'gr.'
  },
}
