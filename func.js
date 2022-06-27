// this func return distance in meters
export const getGeoDistance = (center, point) => {
  const longCenter = center[0];
  const latCenter = center[1];
  const longLocation = point[0];
  const latLocation = point[1];

  const R = 6371e3;
  const { PI } = Math;
  const { sin, cos, atan2 } = Math;


  const LCenter = longCenter * PI / 180;

  const FCenter = latCenter * PI / 180;

  const LLocation = longLocation * PI / 180;

  const FLocation = latLocation * PI / 180;

  const deltaF = FCenter - FLocation;
  const deltaL = LCenter - LLocation;

  const A = sin(deltaF / 2) ** 2 + cos(FCenter) * cos(FLocation) * sin(deltaL / 2) ** 2;
  const C = 2 * atan2(A ** 0.5, 1 - A ** 0.5);
  return R * C;
};

export const filterCoordinates = (center, coordinates, radius) => coordinates.slice().filter((point) => getGeoDistance(center, point) <= radius);

//center is Array example: [56.0099533544705, 92.87059293726652]
//coordinates is Array example: [[56.01084752690318, 92.8728595251225], [56.01066779541285, 92.86799681004142], [56.00840310698764, 92.86569807200308], [56.00872664201661, 92.87510200037295], [56.00959388231627, 92.86166322414887]],
//raduis in Number
