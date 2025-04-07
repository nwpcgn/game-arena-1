export function paginate(arr, size) {
    return arr.reduce((acc, val, i) => {
        let idx = Math.floor(i / size)
        let page = acc[idx] || (acc[idx] = [])
        page.push(val)

        return acc
    }, [])
}
export const getGrid = ({ width, height }) => {
    const array1d = Array.from({ length: width * height }, (_, i) => i + 1)
    return paginate(array1d, width)
}