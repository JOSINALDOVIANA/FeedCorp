import Searchable from "react-searchable-dropdown";
export default function Formelementsizes() {
    return (
        <div >
            <Searchable className="form-control select2"
                value="test"
                placeholder="Choose only one" // by default "Search"
                notFoundText="No result found" // by default "No result found"
                noInput
                options={[
                    {
                        value: "one",
                        label: "One"

                    },
                    {
                        value: "two",
                        label: "Two"

                    },
                    {
                        value: "three",
                        label: "Three"

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