function getLength(x: string | number): number {
  if ((<string>x).length) {
    return (<string>x).length
  } else {
    return x.toString().length
  }
}

function getLength2(x: string | number): number {
  if ((x as string).length) {
    return (x as string).length
  } else {
    return x.toString().length
  }
}