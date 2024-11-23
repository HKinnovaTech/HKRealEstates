import { FaBed, FaBath, FaHotel } from "react-icons/fa";

type PropertyType = 'Villa' | 'Penthouse' | 'Appartment';

type propertyProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    type?: PropertyType;
    bedroom?: number;
    bathroom?: number;
};

const AppsProperty: React.FC<propertyProps> = ({ bedroom = 4, bathroom = 3, type = "Villa" }) => {
    return (
        <div className="bg-cardgray text-white rounded-lg shadow-md">
            <div className="grid grid-cols-6 gap-2">
                <div className="bg-cardgray-10 px-2 py-2 col-span-2 rounded-full flex items-center justify-center space-x-2">
                    <FaBed className="text-purple-500 text-lg" />
                    <span>{bedroom}-Bedroom</span>
                </div>
                <div className="bg-cardgray-10 px-2 py-2 col-span-2 rounded-full flex items-center justify-center space-x-2">
                    <FaBath className="text-purple-500 text-lg" />
                    <span>{bathroom}-Bathroom</span>
                </div>
                <div className="bg-cardgray-10 px-2 py-2 col-span-2 rounded-full flex items-center justify-center space-x-2">
                    <FaHotel className="text-purple-500 text-lg" />
                    <span>{type}</span>
                </div>
            </div>
        </div>
    );
};

export default AppsProperty;
