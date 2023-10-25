import axios from "axios";

class OpensourceLicenseCompatibility {
  async compareLicenses({ apiKey, first_license_name, second_license_name }) {
    try {
      const license_one = await this.getFirstLicense({ first_license_name });
      const license_two = await this.getSecondLicense({ second_license_name });

      if (license_one !== "" || license_two !== "") {
        const serviceResult = await this.processServicesRequest({ apiKey });

        if (JSON.parse(serviceResult).success == false) {
          return serviceResult.message;
        } else {
          let first_id = license_one;
          let second_id = license_two;

          const data = {
            action_type: "check-compatibility",
            license_event_id_one: first_id,
            license_event_id_two: second_id,
          };
          const compatibility = await axios
            .post("https://100080.pythonanywhere.com/api/licenses/", data)
            .then((response) => {
              const data = response.data;
              let result = "";
              if (data.percentage_of_compatibility > 70) {
                result = "Highly Recommended";
              } else if (
                data.percentage_of_compatibility >= 50 &&
                data.percentage_of_compatibility <= 70
              ) {
                result = "Recommended";
              } else {
                result = "Not Recommended";
              }
              return result;
            });
          console.log(compatibility);

          return compatibility;
        }
      } else {
        return "Result not found";
      }
    } catch (error) {
      return error.message;
    }
  }

  async processServicesRequest({ apiKey }) {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sub_service_ids: ["DOWELL100301"],
          service_id: "DOWELL10030",
        }),
        redirect: "follow",
      };

      const service_url = `https://100105.pythonanywhere.com/api/v3/process-services/?type=module_service&api_key=${apiKey}`;

      const serviceResponse = await fetch(service_url, requestOptions);
      return serviceResponse.text();
    } catch (error) {
      return JSON.stringify(error);
    }
  }

  async getFirstLicense({ first_license_name }) {
    try {
      const response = await fetch(
        `https://100080.pythonanywhere.com/api/licenses/?search_term=${first_license_name}&action_type=search`
      );
      const first_response = await response.json();
      console.log(first_response.data[0].eventId);
      return first_response.data[0].eventId;
    } catch (error) {
      return JSON.stringify(error);
    }
  }

  async getSecondLicense({ second_license_name }) {
    try {
      const response = await fetch(
        `https://100080.pythonanywhere.com/api/licenses/?search_term=${second_license_name}&action_type=search`
      );
      const second_response = await response.json();
      console.log(second_response.data[0].eventId);
      return second_response.data[0].eventId;
    } catch (error) {
      return JSON.stringify(error);
    }
  }
}

export default OpensourceLicenseCompatibility;
