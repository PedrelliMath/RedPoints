export default function PointComponent(props: any){
    const { coordinates } = props;
    return (
        <div className='point' style={{ left: coordinates[0] , top: coordinates[1] }}></div>
    )
}