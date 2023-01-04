export function cleanExcelData(data) {
  /* Add "false" to all NSFW that are empty */
  data.map((e) => {
    if (e.nsfw === "TRUE" || e.nsfw === true) {
      e.nsfw = true
    } else {
      e.nsfw = false
    }

    return e
  })

  return data
}
