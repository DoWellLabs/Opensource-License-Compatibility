class OpensourceLicenseCompatibility {
  async compareLicenses({
    apiKey,
    license_event_id_one,
    license_event_id_two,
  }) {
    try {
      const serviceResult = await this.processServicesRequest({ apiKey });
      
      if (JSON.parse(serviceResult).success == false) {
        return serviceResult.message;
      } else {
        const data = {
          action_type: "check-compatibility",
          license_event_id_one,
          license_event_id_two,
      };
        const header = {
          "API-KEY": apiKey,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        };

        const options = {
          method: "POST",
          headers: header,
          body: data,
        };

        await fetch(
          "https://100080.pythonanywhere.com/api/licenses/",
          data,
          options
        )
          .then((response) => {
            const data = response.data;
            let result = ""

            if (data.percentage_of_compatibility > 70) {
              result ="Highly Recommended";
            } else if (
              data.percentage_of_compatibility >= 50 &&
              data.percentage_of_compatibility <= 70
            ) {
              result ="Recommended";
            } else {
              result ="Not Recommended";
            }
            return result;
          })
          .catch((error) => {
            return error.message
          });
      }
    
    } catch (error) {
      return error.message
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
}

export default OpensourceLicenseCompatibility;
