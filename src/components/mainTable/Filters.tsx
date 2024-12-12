import { RootState } from "@/redux/store";
import { Checkbox, Dropdown, DropdownItem, ListGroup, ListGroupItem, RangeSlider } from "flowbite-react";
import { useSelector } from "react-redux";
import useServerData from "@/hooks/useServerData";

interface FiltersProps {
  showFilters: boolean;
  setShowFilters: (showFilters: boolean) => void;
}

const ServerFilters = ({ showFilters, setShowFilters }: FiltersProps) => {
  const { filters, updateFilters } = useServerData();

  const handleUnitChange = (unit: string) => {

  };

  const handleChangeLightning = () => {
    updateFilters({ showLightning: !filters.showLightning });
  }

  const handleChangeStatus = () => {
    updateFilters({ showStatus: !filters.showStatus });
  }

  const handleChangeOnchain = () => {
    updateFilters({ showOnchain: !filters.showOnchain });
  }

  return (
      <>
        <div className={`ml-3 mb-${showFilters ? 1 : 5}`}>
          <button
            className="btn btn-primary underline text-gray-400"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filter
          </button>
        </div>
        {showFilters && (
          <form className="flex flex-col md:flex-row md:justify-start text-gray-400 text-sm">
            {
              /*
              <div className="mb-5 ml-3 md:mr-5">
                <div className="mb-1 block">
                  <label htmlFor="num-reviews-slider">FEE</label>
                </div>
                <div className="flex">
                  <RangeSlider
                    value={filters.fee}
                    onChange={(e) =>
                      updateFilters({ fee: Number(e.target.value) })
                    }
                    id="num-reviews-slider"
                    min={0}
                    max={10}
                    sizing="sm"
                  />
                  <span className="ml-1 mt-0.5">{filters.fee} & up</span>
                </div>
              </div>
              */
            }

            {
              /*
              <div className="mb-5 ml-3 md:mr-5">
                <div className="mb-1 block">
                  <label htmlFor="num-reviews-slider">Timelock</label>
                </div>
                <div className="flex">
                  <RangeSlider
                    value={filters.fee}
                    onChange={(e) =>
                      updateFilters({ fee: Number(e.target.value) })
                    }
                    id="num-reviews-slider"
                    min={0}
                    max={10}
                    sizing="sm"
                  />
                  <span className="ml-1 mt-0.5">{filters.fee} & up</span>
                </div>
              </div>
              */
            }
            
            <div className="mb-5 ml-3 md:mr-5">
              <div>
                <label htmlFor="units">Lightning</label>
                <div>
                  <Checkbox
                    id="unit-sat"
                    checked={filters.showLightning}
                    onChange={() => handleChangeLightning()}
                    className="mr-2"
                  />
                  <label htmlFor="unit-sat">Yes</label>
                </div>
              </div>
            </div>
            {
              /*
                <div className="mb-5 ml-3 md:mr-5">
                  <div>
                    <label htmlFor="units">Country</label>
                    <div>
                      <Dropdown label={"ALL"}>
                        <DropdownItem>US</DropdownItem>
                        <DropdownItem>UK</DropdownItem>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              */
            }
            <div className="mb-5 ml-3 md:mr-5">
              <div>
                <label htmlFor="units">Status</label>
                <div>
                  <Checkbox
                    id="unit-sat"
                    checked={filters.showStatus}
                    onChange={() => handleChangeStatus()}
                    className="mr-2"
                  />
                  <label htmlFor="unit-sat">Active</label>
                </div>
              </div>
            </div>
            <div className="mb-5 ml-3 md:mr-5">
              <div>
                <label htmlFor="units">On Chain</label>
                <div>
                  <Checkbox
                    id="unit-sat"
                    checked={filters.showOnchain}
                    onChange={() => handleChangeOnchain()}
                    className="mr-2"
                  />
                  <label htmlFor="unit-sat">Yes</label>
                </div>
              </div>
            </div>
          </form>
        )}
      </>
  );
};

export default ServerFilters;
