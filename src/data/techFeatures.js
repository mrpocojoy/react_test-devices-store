export const keyFeatures = ['cpu', 'ram', 'os', 'battery', 'primaryCamera', 'secondaryCmera', 'dimentions', 'weight', 'displayResolution']


export const featureCategories = [
  {
    label: 'Screen',
    content: ['displayResolution', 'displaySize', 'displayType']
  }, 
  {
    label: 'Camera',
    content: ['primaryCamera', 'secondaryCmera']
  }, 
  {
    label: 'Memory & Storage',
    content: ['internalMemory', 'externalMemory', 'ram']
  }, 
  {
    label: 'Processor',
    content: ['cpu', 'chipset', 'gpu']
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
    label: 'Connecting Ports',
    content: ['usb']
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
    label: 'Display Resolution', iconSrc: '',
  },
  displaySize: {
    label: 'Display Size', iconSrc: '',
  },
  displayType: {
    label: 'Display Type', iconSrc: '',
  },
  primaryCamera: {
    label: 'Primary Camera', iconSrc: '', splitter: ' with '
  },
  secondaryCmera: {
    label: 'Secondary Camera', iconSrc: '', splitter: ' with '
  },
  internalMemory: {
    label: 'Internal Memory', iconSrc: '', splitter: ' / '
  },
  externalMemory: {
    label: 'External Memory', iconSrc: '',
  },
  ram: {
    label: 'RAM', iconSrc: '',
  },
  cpu: {
    label: 'Processor', iconSrc: '',
  },
  chipset: {
    label: 'Chipset', iconSrc: '',
  },
  gpu: {
    label: 'GPU', iconSrc: '',
  },
  os: {
    label: 'Operating System', iconSrc: '',
  },
  battery: {
    label: 'Battery', iconSrc: '',
  },
  usb: {
    label: 'USB', iconSrc: '',
  },
  sensors: {
    label: 'Sensors', iconSrc: '', splitter: ' & '
  },
  networkTechnology: {
    label: 'Network Technology', iconSrc: '',
  },
  networkSpeed: {
    label: 'Network Speed', iconSrc: '',
  },
  sim: {
    label: 'SIM', iconSrc: '',
  },
  gprs: {
    label: 'GPRS', iconSrc: '',
  },
  edge: {
    label: 'EDGE', iconSrc: '',
  },
  gps: {
    label: 'GPS', iconSrc: '',
  },
  wlan: {
    label: 'WLAN', iconSrc: '',
  },
  bluetooth: {
    label: 'Bluetooth', iconSrc: '',
  },
  nfc: {
    label: 'NFC', iconSrc: '',
  },
  dimentions: {
    label: 'Dimensions', iconSrc: '',
  },
  weight: {
    label: 'Weight', iconSrc: '', units: 'gr.'
  },
}