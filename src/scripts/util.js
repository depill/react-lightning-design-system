let assetRoot = '/asset/';

function setAssetRoot(path) {
  console.log('assetRoot=', path);
  assetRoot = path;
}

function getAssetRoot() {
  return assetRoot;
}

export default { setAssetRoot, getAssetRoot };
