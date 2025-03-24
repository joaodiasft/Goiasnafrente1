export function getImageUrl(id, width, height) {
  return `https://picsum.photos/${width}/${height}?random=${id}`;
}

export function getProfileImageUrl(id) {
  return getImageUrl(id, 100, 100);
}

export function getNewsImageUrl(id) {
  return getImageUrl(id, 300, 200);
}

export function getInstagramImageUrl(id) {
  return getImageUrl(id, 300, 300);
}