import { Link, useLoaderData } from 'react-router-dom';

const LetsLearnPage = () => {
    const data = useLoaderData()
    console.log(data)

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Let’s Learn Vocabulary</h1>

            {/* Lesson Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                {
                    data.map(lession => <Link key={lession.id}>
                        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all border border-primary cursor-pointer">
                            <div className="card-body items-center">
                                <h2 className="text-xl font-semibold">Lesson-{lession.lesson_no}</h2>
                            </div>
                        </div>
                    </Link>)
                }
            </div>

            {/* Tutorial Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Alphabet Learning Tutorial</h2>
                <div className="flex justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6p9Il_j0zjc?si=BbaUi_bXOfKI9lSV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* View More Button */}
            <div className="text-center">
                <Link to="/tutorials" >
                    <button className="btn btn-primary">View More</button>
                </Link>
            </div>
        </div>
    );
};

export default LetsLearnPage;
