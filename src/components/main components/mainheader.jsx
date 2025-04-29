import NavigationBar from "./navbar";

export default function MainHeader() {
    return (
        <>
            <header>
                <div fluid className='bg-secondary text-white py-1 px-3 d-flex justify-content-between align-items-center'>
                    <h4 className="m-0">Welcome</h4>
                    <img src="/images/profile.jpg" className='rounded-circle' style={{ width: "2rem" }} alt="Profile" />
                </div>
                <NavigationBar />
            </header>
        </>
    )
}