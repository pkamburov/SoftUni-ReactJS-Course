export default function GuideItem({
    _id,
    imageUrl,
    name,
    nameLatin,
}) {
    return (
        <div key={_id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    alt='{imageAlt}'
                    src={imageUrl}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={_id}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </a>
                        <p>
                            {nameLatin}
                        </p>
                    </h3>
                </div>
            </div>
        </div>
    )
}