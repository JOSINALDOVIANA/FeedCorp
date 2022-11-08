import Searchable from "react-searchable-dropdown";
export default function QuantitySelect() {
    return (
        <div >
            <Searchable className="form-control select2"
                value="test"
                placeholder="Choose one" // by default "Search"
                notFoundText="No result found" // by default "No result found"
                noInput
                options={[
                    {
                        value: "",
                        label: "1"

                    },
                    {
                        value: "it projects",
                        label: "2"
                    },
                    {
                        value: "business case",
                        label: "3"
                    },
                    {
                        value: "microsoft project",
                        label: "4"
                    },
                    {
                        value: "risk ]management",
                        label: "5"
                    },


                ]}
                onSelect={(value) => {
                    // console.log(value);
                }}
                listMaxHeight={140} //by default 140
            />
        </div>
    );
}