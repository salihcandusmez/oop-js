import { Car } from './classes/car'
import { Drone } from './classes/drone'
import { FleetDataService } from './services/fleet-data-service'
import { fleet } from './fleet-data'

let dataService = new FleetDataService()
dataService.loadData(fleet)

for (let e of dataService.errors) {
  console.log(e)
}
